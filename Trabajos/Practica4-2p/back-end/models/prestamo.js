const { model, Schema } = require('mongoose');

const PrestamoSchema = Schema({
  fecha: {
    type: String,
    required: true
  },
  hora: {
    type: Number,
    default: 0,
    required: true
  },
  numerohorapres: {
    type: Number,
    required: true
  },
  computadora: {
    type: Schema.Types.ObjectId,
    ref: 'Computadora',
    required: false
  },
  prestamista: {
    type: Schema.Types.ObjectId,
    ref: 'Prestamista',
    required: false
  }
});

PrestamoSchema.methods.toJSON = function() {
  const { __v, status, ...data } = this.toObject();
  return data;
};

module.exports = model('Prestamo', PrestamoSchema);
