const { model, Schema } = require('mongoose');

const PrestamoSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true
    },
    idcomputadora: {
      type: Number,
      required: true,
      ref: 'Computadora'
    },
    idprestamista: {
      type: Number,
      required: true,
      ref: 'Prestamista'
    },
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
    }
  }
);

const Prestamo = model('Prestamo', PrestamoSchema);

module.exports = Prestamo;