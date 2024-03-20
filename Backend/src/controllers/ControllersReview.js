const Reseña = require('../Models/Review');

const crearReseña = async (req, res) => {
  const { username, review, rating } = req.body;

  const nuevaReseña = new Reseña({
    username,
    review,
    rating,
  });

  try {
    const reseñaGuardada = await nuevaReseña.save();
    res.status(201).json(reseñaGuardada);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo guardar la reseña' });
  }
};

const obtenerReseñas = async (req, res) => {
  try {
    const reseñas = await Reseña.find();
    res.status(200).json(reseñas);
  } catch (error) {
    res.status(400).json({ error: 'No se pudieron obtener las reseñas' });
  }
};

const eliminarReseña = async (req, res) => {
  try {
    const reseñaEliminada = await Reseña.findByIdAndDelete(req.params.id);
    if (!reseñaEliminada) throw Error('No se encontró la reseña con el id dado');
    res.status(200).json({ success: true, msg: 'Reseña eliminada' });
  } catch (error) {
    res.status(400).json({ success: false, error: 'No se pudo eliminar la reseña' });
  }
};

module.exports =  {crearReseña, obtenerReseñas, eliminarReseña}
