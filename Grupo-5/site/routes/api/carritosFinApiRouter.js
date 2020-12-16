// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const carritoController = require('../../controllers/api/carritosFinController');

router.get('/carritos/finalizados', carritoController.cantidadCarritos); /* GET - home page */

module.exports = router;
