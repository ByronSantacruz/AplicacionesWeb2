const { Router } = require('express')
const { check } =  require('express-validator')

const { createProduct,
     getProduct, 
     getProducts,
     updateProduct,
     deleteProduct } = require('../controllers').Product;

const { validateFields } = require('../middlewares')

const router = Router();

//http://localhost:2500/v1/inventory/api/products

router.get('/', getProducts);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getProduct);

router.post('/',[
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createProduct)

router.put('/:id', updateProduct)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteProduct)

module.exports = router;