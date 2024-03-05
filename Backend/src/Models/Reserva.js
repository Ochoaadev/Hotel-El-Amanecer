const mongoose = require('mongoose');

const reserva = new mongoose.Schema(
  {
    DNI: {
      type: Number,
      required: true
    },
    Nombre_Apellido: {
      type: String,
      required: true
    },
    Email: {
      type: String,
      required: true
    },
    Telefono: {
      type: Number,
      required: true
    },
    Fecha_llegada: {
      type: Date,
      required: false
    },
    Fecha_Salida: {
      type: Date,
      required: false
    },
    Cantidad_Persona: {
      type: Number,
    },
    Estatus: {
      type: String,
    },
    Comentario: {
      type: String,
      uniqued: false,
      required: false
    },
  }
)

module.exports = mongoose.model('reservas', reserva)
