const model = require("../models/reserva");

const AggReservas = async(req, res) => {
   try {
      //Se reciben los parametros enviados en el body en un objeto llamado json.
      const json = {
         DNI: req.body.DNI,
         Nombre_Apellido:req.body.Nombre_Apellido,
         Email:req.body.Email,
         Telefono:req.body.Telefono,
         Fecha_llegada:req.body.Fecha_llegada,
         Fecha_Salida:req.body.Fecha_Salida,
         Cantidad_Persona:req.body.Cantidad_Persona,
         Comentario:req.body.Comentario,
         Estatus: "Pendiente"
         
      };
      // Validamos que no falten datos en el objeto json
      if (!json.DNI && !json.Nombre_Apellido) {
            //Si el error es 400 es por qué no se estan transfiriendo los valores correctos.  
          return res.status(400).json({ message: "Los valores son Requeridos", status: 400 });
         //Se muestra el mensaje, indicando las posibles causas, en este caso categoria es una sola columna llamada name.
       }
       //Se almacena en data el json
       const data = new model(json);
       await data.save();
       //Se guarda la data utilizando los parametro data.save.

       //Se valida la respuesta de la base de datos, dependiendo se muestra el mensaje de exito de lo contrario el
       //mensaje de error.
       res
       .status(200)
       .json({ message: "Reserva agregada exitosamente!", status: 200 });
       console.log('agregado!')
    } catch (error) {
       console.log("Error", error);
       res
       .status(500)
       .json({ message: "Error al intentar agregar la Reserva", status: 500 });
    }
}
module.exports = { AggReservas};
