var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')

/* LOGIN */
router.get('/login',usersController.login);
//REGISTRO
router.get('/registro',usersController.registro);
router.post('/registro',usersController.usuarioResgistrado);

module.exports = router;
