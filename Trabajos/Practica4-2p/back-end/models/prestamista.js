const { model, Schema } = require('mongoose');

const PrestamistaSchema = Schema({
  name: {
    type: String,
    required: true
  },
  identificacion: {
    type: String,
    required: true
  }
});

module.exports = model('Prestamista', PrestamistaSchema);
