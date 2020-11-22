// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productosController = require('../../controllers/api/productosApiController');

router.get('/productos/cantidadPro', productosController.cantidadProductos); /* GET - home page */

module.exports = router;
