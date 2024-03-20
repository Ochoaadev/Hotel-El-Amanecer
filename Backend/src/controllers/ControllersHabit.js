const model = require('../Models/Habitaciones')
const { UploadImage } = require('../config/cloudinary');
const fs = require('fs')
const path = require('path')

const AggHabit = async (req, res) => {
  // Agregar esta verificación para asegurarse de que req.file esté definido
  if (!req.file) {
    return res.status(400).json({ message: 'No se proporcionó ninguna imagen', status: 400 });
  }

  const image_url = await UploadImage(req.file.path);

  try {
    const json = {
      Tipo: req.body.Tipo,
      Descripcion: req.body.Descripcion,
      Comodidad: req.body.Comodidad,
      imagen: image_url,
      Tarifa: req.body.Tarifa,
      Review: req.body.Review
    };

    if (!json.Tipo || !json.Descripcion || !json.Comodidad || !json.imagen || !json.Tarifa || !json.Review) {
      return res.status(400).json({ message: 'Rellena todo los datos para agregar la habitación', status: 400 });
    }

    const data = new model(json)
    await data.save()
    res.status(200).json({ message: 'Se ha añadido correctamente la habitacion', status: 200 });
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ message: "Error al agregar los datos de la habitación, vuelve a intentar" })
  }
}
const ListarHabit = async (req, res) => {
  try {
    const room = await model.find();
    console.log(room)
    res.status(200).json(room);
  } catch (erro) {
    res.status(500).json({ message: 'Error al intentar listar las habitaciones', status: 500 })
  }
}

const ListarHabitFilter = async (req, res) => {
  try {
    const { filtro, valor } = req.params;
    //Expresion regular para el valor a buscar
    const regex = new RegExp(valor, 'i');

    const room = await model.find({ [filtro]: regex })
    console.log(room)
    res.status(200).json(room);
  } catch (erro) {
    res.status(500).json({ message: 'Error al intentar listar las habitaciones', status: 500 })
  }
}

const ActualizarHabit = async (req, res) => {
  let image_url;
  if (req.file) {
    console.log(req.file.path);
    image_url = await UploadImage(req.file.path)
  }
  try {
    const roomId = req.params.id
    const updateData = {
      Tipo: req.body.Tipo,
      Descripcion: req.body.Descripcion,
      Comodidad: req.body.Comodidad,
      imagen: image_url,
      Tarifa: req.body.Tarifa,
      Review: req.body.Review
    }

    const UpdateRoom = await model.findByIdAndUpdate(roomId, updateData, { new: true })

    if (UpdateRoom) {
      res.status(200).jsom({ message: 'Datos de la habitacion actualizado correctamente', status: 200 });
    } else {
      res.status(404).json({ message: 'No se encontró la habitación' })
    }

  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ message: 'Error al intentar editar los datos de la habitación', status: 500 });
  }
}

const EliminarHabit = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await model.findByIdAndDelete(id);

    if (!deleted) return res.status(404).send('Error: No se ha encontrado la habitación que desea eliminar')

    //Delete Images
    const imagePath = path.join(__dirname, '../public/', deleted.imagen);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    res.status(200).json({ message: 'Los datos de la habitación se han eliminado correctamente', status: 200, deleted: deleted });
  } catch (err) {
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      return res.status(400).send('Error: El ID del producto proporcionado no es válido.');
    } else {
      return res.status(500).send('Error al intentar eliminar el item.');
    }
  }
};

module.exports = { AggHabit, ListarHabit, ListarHabitFilter, ActualizarHabit, EliminarHabit };