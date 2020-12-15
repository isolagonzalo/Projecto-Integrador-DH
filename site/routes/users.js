
var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
let {check, validationResult, body}= require('express-validator')
let guestMiddlewares = require('../middlewares/guestMiddlewares');
let db = require('../database/models')
let bcrypt = require('bcrypt')
/* LOGIN */
router.get('/login',guestMiddlewares,usersController.login);
router.post('/login', [
    check("email").isEmail().withMessage("el email tiene que ser valido"),
    check("contrasenia").isLength({min:6}).withMessage("la contraseña debe tener al menos 6 caracteres"),
    body('email').custom(async (email) => {
      const existingUser = await db.Usuario.findOne({ where: {email :email}})
      .then(function(user){
         return user });
      if (existingUser) {
        console.log('holis');
      }else{
        throw new Error('Email no existe')
      }
    })
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
router.get('/registro',guestMiddlewares,usersController.registro);
router.post('/registro',[
  check('nombre').isLength({min:1}).withMessage('debe poner un nombre'),
  check('email').isEmail().withMessage('el email debe ser un email valido'),
  check('contrasenia').isLength({min:6}).withMessage('la contraseña debe tener al menos 6 caracteres'),
  check('rePassword').isLength({min:1}).withMessage('las contraseñas no coinciden'),
  body('email').custom(async (email) => {
    const existingUser = await db.Usuario.findOne({ where: {email :email}})
    .then(function(user){ return user });
    if (existingUser) {
      throw new Error('--Email existente--')
    }
  })
],usersController.usuarioResgistrado);

//PERFIL DEL USUARIO
router.get('/perfil/:id',usersController.perfil)
//EDITAR EL PERFIL DEL USUARIO

router.get('/perfileditrar/:id',usersController.editarPerfil)
router.post('/perfileditar/:id',usersController.actualizarPerfil)

//ELIMINAR UN USUARIO

router.get('/eliminar/:id',usersController.eliminarCuenta)

module.exports = router;
