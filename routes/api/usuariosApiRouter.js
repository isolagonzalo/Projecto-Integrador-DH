// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usuariosController = require('../../controllers/api/usuariosApiController');

router.get('/usuarios/cantidad', usuariosController.cantidadUsuarios); /* GET - home page */

module.exports = router;
