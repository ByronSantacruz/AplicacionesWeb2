const { model, Schema } = require('mongoose');

const ComputadoraSchema = Schema({
  name: {
    type: String,
    required: [ true, 'El nombre es necesaria'],
    unique:true
  },
  costoxhora: {
    type: Number,
    default: 0,
    required: true
  }
});

module.exports = model('Computadora', ComputadoraSchema);
