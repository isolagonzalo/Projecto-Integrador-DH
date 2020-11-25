var express = require('express');
var router = express.Router();
const indexController = require ('../controllers/indexController')
const carritoController = require ('../controllers/carritoController')

/* GET home page. */
router.get('/',indexController.inicio);
// Como comprar
router.get('/comoComprar',indexController.comoComprar)
//Contacto
router.get('/contacto',indexController.contacto)
//Carrito
router.get('/carrito/:id',carritoController.carrito)
//Cerrar sesion 
router.get('/cerrar',indexController.cerrarSesion)

module.exports = router;
