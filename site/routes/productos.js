var express = require('express');
const { route } = require('.');
var router = express.Router();
const productosController = require ('../controllers/productosController')
const carritoController = require ('../controllers/carritoController')
const multer = require('multer');
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/imagenesProductos')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

/*LISTAR PRODUCTOS*/
router.get('/',productosController.productos);

// CREAR PRODUCTO 
router.get('/crear',productosController.crear)
router.post('/crear',upload.any(),productosController.guardar)

//DETALLE PRODUCTO
router.get('/detalle/:id',productosController.detalle) 
router.post('/detalle/:id',productosController.agregarCarrito) 

//EDITAR PRODUCTO

router.get('/editar/:id',productosController.producto) 
router.post('/editar/:id',productosController.editar)

//ELIMINAR PRODUCTO

router.get('/eliminar/:id',productosController.eliminar) 

//RUTAS DE CATEGORIAS 

//remeras
router.get('/remeras',productosController.remeras);
//camisas
router.get('/camisas',productosController.camisas);
//camperas
router.get('/camperas',productosController.camperas);
//buzos
router.get('/buzos',productosController.buzos);
//conjuntos
router.get('/conjuntos',productosController.conjuntos);
//sacos
router.get('/sacos',productosController.sacos);
//chalecos
router.get('/chalecos',productosController.chalecos);
//musculosas
router.get('/musculosas',productosController.musculosas);
//jeans
router.get('/jeans',productosController.jeans);
//bermudas
router.get('/bermudas',productosController.bermudas);
//pantalones
router.get('/pantalones',productosController.pantalones);
//mallas
router.get('/mallas',productosController.mallas);
//ropa interior
router.get('/ropaInterior',productosController.ropaInterior);
//calzado
router.get('/calzado',productosController.calzado);

module.exports = router;