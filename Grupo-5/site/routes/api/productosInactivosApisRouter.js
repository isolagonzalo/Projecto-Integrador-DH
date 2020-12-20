// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productosController = require('../../controllers/api/productosInactivosApiController');

router.get('/productos/cantidadProInactivos', productosController.cantidadProductos); /* GET - home page */

module.exports = router;
