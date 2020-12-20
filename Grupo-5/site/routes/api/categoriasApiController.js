// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const carritoController = require('../../controllers/api/categoriasApiController');

router.get('/productos/categorias', carritoController.categorias); /* GET - home page */

module.exports = router;
