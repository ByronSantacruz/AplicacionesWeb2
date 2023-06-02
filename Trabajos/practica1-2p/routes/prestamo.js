const { Router } = require('express')
const { check } =  require('express-validator')

const { getPrestamo, 
     getPrestamos,
     createPrestamo,
     updatePrestamo,
     deletePrestamo 
    } = require('../controllers').Prestamo;

const { validateFields } = require('../middlewares')

const router = Router();

///  RUTAS:     
// https://localhost:3000/api/v1/prestamo/

//Get Global
router.get('/', getPrestamos);

//Get Individual
router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getPrestamo);

 //Post Datos
 router.post('/',[
    check('idcomputadora', 'La identificacion de la computadora no es correcta').not().isEmpty(),
    check('idprestamista', 'La identificacion del prestamista no es correcta').not().isEmpty(),
    check('fecha', 'La fecha no es correcta').not().isEmpty(),
    check('hora', 'La hora del prestamo no es correcta').not().isEmpty(),
    check('numerohorapres', 'El numero hora prestamo no es correcto').not().isEmpty(),

    validateFields
] , createPrestamo)

//Put Datos
router.put('/:id', updatePrestamo)

//Delete Datos
router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deletePrestamo)

module.exports = router;
