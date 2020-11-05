let db = require('../database/models')
let bcrypt = require('bcrypt')

const userController = {
    login:(req,res)=>{
        res.render('usuario/login')
    },
    registro:(req,res)=>{
        res.render('usuario/registro')
    },
    usuarioResgistrado:(req,res)=>{
        let passEncriptada = bcrypt.hashSync(req.body.contrasenia, 12)

        db.Usuario.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email : req.body.email,
            contrasenia : passEncriptada
        })

        .then(function(){        
            if(req.body.confirmarContraseña == req.body.contrasenia){
                res.render('principales/index')
            }else{
                res.render('usuario/registro')
            }
        })
    },
}
module.exports=userController;