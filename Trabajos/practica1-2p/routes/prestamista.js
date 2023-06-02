const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createPrestamista,
    getPrestamista,
    getPrestamistas,
    updatePrestamista,
    deletePrestamista
} = require('../controllers').Prestamista;

const { validateFields } = require('../middlewares')

const router= Router();

///  RUTAS:     
// https://localhost:3000/api/v1/prestamista/   

//Get Global
router.get('/', getPrestamistas );

//Get Individual
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getPrestamista );

 //Post Datos
 router.post('/',[
    check('nombre', 'El nombre del prestamista es requerido').not().isEmpty(),
    check('identificacion', 'La cedula de pretamista es requerido').not().isEmpty(),
    validateFields
], createPrestamista);

//Put Datos
router.put('/:id', updatePrestamista);

//Delete Datos
 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deletePrestamista);

module.exports = router;
