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
//Carrito finalizado y actualizar datos del usuario
router.post('/carrito/:id',carritoController.carritoFinalizado)
//BORRAR PRODUCTO DEL CARRITO
router.get('/borrado/:id',carritoController.productoBorrado)
//Cerrar sesion 
router.get('/cerrar',indexController.cerrarSesion)
//LISTADO DE USUARIOS 
router.get('/listadoUsuarios',indexController.listadoDeUsuarios)
//LISTADO DE PRODUCTOS
router.get('/listadoProductos',indexController.listadoProductos)
//LISTADO DE ORDENES
router.get('/listadoOrdenes',indexController.listadoOrdenes)
//ORDEN
router.get('/orden/:id/:idUsuario',indexController.orden)
//MIS COMPRAS
router.get('/misCompras/:id',indexController.compras)
//COMPRA 
router.get('/compra/:id',indexController.compra)


module.exports = router;
