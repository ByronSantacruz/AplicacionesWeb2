const { Router } = require('express');
const { check } = require('express-validator');
const {
  createPrestamo,
  getPrestamos,
  getPrestamo,
  updatePrestamo,
  deletePrestamo
} = require('../controllers').Prestamo;
const { validateFields } = require('../middlewares');

const router = Router();

// Ruta para obtener todos los préstamos
router.get('/', getPrestamos);

// Ruta para obtener un préstamo por ID
router.get(
  '/:id',
  check('id', 'Este no es un ID de Mongo correcto').isMongoId(),
  getPrestamo
);

// Ruta para crear un nuevo préstamo
router.post(
  '/',
  [
    check('fecha', 'La fecha es requerida').not().isEmpty(),
    check('hora', 'La hora es requerida').not().isEmpty(),
    check('numerohorapres', 'El número de horas prestadas es requerido').not().isEmpty(),
    validateFields
  ],
  createPrestamo
);

// Ruta para actualizar un préstamo por ID
router.put('/:id', updatePrestamo);

// Ruta para eliminar un préstamo por ID
router.delete(
  '/:id',
  [
    check('id', 'Debe ser un ID de Mongo válido').isMongoId()
  ],
  deletePrestamo
);

module.exports = router;
