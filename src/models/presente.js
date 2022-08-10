const mongoose = require('mongoose');

const PresenteSchema = new mongoose.Schema({
  produto: {
    type: String,
    required: true,
  },

  marca: {
    type: String,
    required: true,
  },

  foto: {
    type: String,
    required: true,
  },

  preco: {
    type: Number,
    required: true,
  },
});

const Presente = mongoose.model('presentes', PresenteSchema);

module.exports = Presente;
