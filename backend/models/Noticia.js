const mongoose = require('mongoose');

const noticiaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  archivo: {
    type: String, // Aquí puedes guardar el nombre o URL del archivo
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  categoria: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Noticia', noticiaSchema);
