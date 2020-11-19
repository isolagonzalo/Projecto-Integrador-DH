
var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
let {check, validationResult, body}= require('express-validator')
let guestMiddlewares = require('../middlewares/guestMiddlewares');


/* LOGIN */
router.get('/login',usersController.login);
router.post('/login', [
    check("email").isEmail().withMessage("el email tiene que ser valido"),
    check("contraseña").isLength({min:8}).withMessage("la contra es muy corta")
] , usersController.postLogin);

router.get('/prueba',function(red, res){
    console.log(req.session.usuarioLogueado)
    const user = req.session.usuarioLogueado;
    delete req.session.usuarioLogueado;
    res.render('pruebaa', {
      user
    })
});
//REGISTRO
router.get('/registro', usersController.registro);
router.post('/registro',guestMiddlewares,usersController.usuarioResgistrado);

module.exports = router;
