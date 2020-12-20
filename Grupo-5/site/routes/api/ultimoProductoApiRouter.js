// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productosController = require('../../controllers/api/ultimoProductoApiController');

router.get('/productos/ultimoProducto', productosController.ultimoProductos); /* GET - home page */

module.exports = router;
