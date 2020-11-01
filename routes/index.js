var express = require('express');
var router = express.Router();
const indexController = require ('../controllers/indexController')

/* GET home page. */
router.get('/',indexController.inicio);
// Como comprar
router.get('/comoComprar',indexController.comoComprar)
//Contacto
router.get('/contacto',indexController.contacto)
//Carrito
router.get('/carrito',indexController.carrito)

module.exports = router;
