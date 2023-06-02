const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createComputadora,
    getComputadora,
    getComputadoras,
    updateComputadora,
    deleteComputadora
} = require('../controllers').Computadora;

const { validateFields } = require('../middlewares')

const router= Router();

///  RUTAS:     
// https://localhost:3000/api/v1/computadora/ 

//Get Global
router.get('/', getComputadoras );

 //Get Individual
router.get('/:id', [
    check('id', 'Este no es un ID de Mongo correcto').isMongoId()
], getComputadora );

//Post Datos
 router.post('/',[
    check('descripcion', 'EL nombre de la Computadora es requerida').not().isEmpty(),
    check('detallestecnicos', 'Los detalle de la computadora es requerida').not().isEmpty(),
    check('costoxhora', 'Los costo por hora de la computadora es requerida').not().isEmpty(),
    validateFields
] , createComputadora)

//Put Datos
 router.put('/:id', updateComputadora)


//Delete Datos
 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteComputadora);

module.exports = router;
