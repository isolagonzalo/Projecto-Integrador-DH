var express = require('express');
const { route } = require('.');
var router = express.Router();
const productosController = require ('../controllers/productosController')
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

/* GET home page. */
router.get('/',productosController.productos);
// CREAR PRODUCTO 
router.get('/crear',productosController.crear)
router.post('/crear',upload.any(),productosController.guardar)

/*
router.get('/', controller.index )
*/
/*detalle de producto*/
//router.get('/detalle/:id',productosController.detalle)

//
router.get('/detalle/:id',productosController.detalle) 

module.exports = router;