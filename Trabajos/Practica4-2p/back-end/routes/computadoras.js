const { Router } = require('express');
const { check } = require('express-validator');

const {
  createComputadora,
  getComputadoras,
  getComputadora,
  updateComputadora,
  deleteComputadora
} = require('../controllers').Computadora;

const { validateFields } = require('../middlewares');

const router = Router();

// Para ver prestamo
// http://localhost:2000/v1/inventory/api/Computadoras

router.get('/', getComputadoras);
router.get(
  '/:id',
  check('id', 'Este no es un ID de Mongo correcto').isMongoId(),
  getComputadora
);

router.post(
  '/',
  [
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateFields
  ],
  createComputadora
);

router.put('/:id', updateComputadora);

router.delete(
  '/:id',
  [
    check('id', 'Debe ser un ID de Mongo válido').isMongoId()
  ],
  deleteComputadora
);

module.exports = router;
