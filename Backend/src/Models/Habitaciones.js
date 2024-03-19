const mongoose = require('mongoose')

const rooms = new mongoose.Schema({
  Tipo: {
    type: String,
    required: true,
  },
  imagen: {
    type: String
  },
  Descripcion: {
    type: String,
    required: true,
  },
  Comodidad: {
    type: String,
    required: true,
  },
  Tarifa: {
    type: String,
    required: true,
  },
  Review: {
    type: String
  },
  Evaluacion: {
    type: Number,
  }
});

module.exports = mongoose.model('Habitaciones', rooms)