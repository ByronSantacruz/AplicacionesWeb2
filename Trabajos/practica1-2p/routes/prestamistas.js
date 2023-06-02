const { Router } = require('express');
const { check } =  require('express-validator')

const {
    createPrestamista,
    getPrestamistas,
    getPrestamista,
    updatePrestamista,
    deletePrestamista} = require('../controllers').Prestamista;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getPrestamistas );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getPrestamista );

 router.post('/',[
    check('name', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createPrestamista);

 router.put('/:id', updatePrestamista);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deletePrestamista);

module.exports = router;