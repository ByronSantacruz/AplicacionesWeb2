const { Router } = require('express');
const { check } = require('express-validator');

const {
  crearPrestamo,
  obtenerPrestamos,
  obtenerPrestamosPorId,
  actualizarPrestamo,
  eliminarPrestamo,
} = require('../controllers').Prestamo;

const router = Router();

// Rutas de las notas
router.post('/', [
  check('id', 'El campo "id" es obligatorio').notEmpty().isNumeric(),
  check('idcomputadora', 'El campo "idcomputadora" es obligatorio').notEmpty().isNumeric(),
  check('idprestamista', 'El campo "idprestamista" es obligatorio').notEmpty().isNumeric(),
  check('fecha', 'El campo "fecha" es obligatorio').notEmpty(),
  check('hora', 'El campo "hora" es obligatorio').notEmpty().isNumeric(),
  check('numerohorapres', 'El campo "numerohorapres" es obligatorio').notEmpty()
], crearPrestamo);

router.get('/', obtenerPrestamos);
router.get('/:id', obtenerPrestamosPorId);

router.put('/:id', [
  check('idcomputadora', 'El campo "idcomputadora" es obligatorio').optional().isNumeric(),
  check('idprestamista', 'El campo "idprestamista" es obligatorio').optional().isNumeric(),
  check('fecha', 'El campo "fecha" es obligatorio').optional().notEmpty(),
  check('hora', 'El campo "hora" es obligatorio').optional().isNumeric(),
  check('numerohorapres', 'El campo "numerohorapres" es obligatorio').optional().notEmpty()
], actualizarPrestamo);

router.delete('/:id', eliminarPrestamo);

module.exports = router;
