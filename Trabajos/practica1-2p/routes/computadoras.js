const { Router } = require('express');
const { check } =  require('express-validator')

const {
    createComputadora,
    getComputadoras,
    getComputadora,
    updateComputadora,
    deleteComputadora} = require('../controllers').Computadora;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getComputadoras );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getComputadora );

 router.post('/',[
    check('name', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createComputadora);

 router.put('/:id', updateComputadora);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteComputadora);

module.exports = router;