const { Router } = require('express');
const { check } = require('express-validator');

const {
  createPrestamista,
  getPrestamistas,
  getPrestamista,
  updatePrestamista,
  deletePrestamista
} = require('../controllers').Prestamista;

const { validateFields } = require('../middlewares');

const router = Router();

// Para ver prestamo
// http://localhost:2000/v1/inventory/api/Prestamistas

router.get('/', getPrestamistas);
router.get(
  '/:id',
  check('id', 'Este no es un ID de Mongo correcto').isMongoId(),
  getPrestamista
);

router.post(
  '/',
  [
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateFields
  ],
  createPrestamista
);

router.put('/:id', updatePrestamista);

router.delete(
  '/:id',
  [
    check('id', 'Debe ser un ID de Mongo válido').isMongoId()
  ],
  deletePrestamista
);

module.exports = router;
