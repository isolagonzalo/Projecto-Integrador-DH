let db = require('../database/models')
let bcrypt = require('bcrypt')
let {check, validationResult, body}= require('express-validator')


const userController = {
    login:(req,res)=>{
        if(req.session.usuarioLogueado != undefined){
            res.render('usuario/login',{usuario:usuarioLogueado})
        }else{
            res.render('usuario/login')
        }
        
    },
    
    postLogin:(req,res)=>{
        
        let errors = validationResult(req)
        if(errors.isEmpty()){
            db.Usuario.findOne({
                where:{email:req.body.email}
            })
            .then(usuario=>{
                let contraseniaEncriptada = usuario.contrasenia
                if(bcrypt.compareSync(req.body.contrasenia, contraseniaEncriptada)){
                    req.session.usuarioLogueado = usuario
                    if(req.body.recordame != undefined){
                        res.cookie('recordame', usuario.email, {maxAge: 60000})
                    }
                    res.redirect('/');
                }else{
                    res.render('usuario/login',{errorValidacion : 'Contraseña o E-mail incorrectos'})
                }
            })
        }else{
            res.render('usuario/login',{errors:errors.errors})
        }
    },

    registro:(req,res)=>{
        res.render('usuario/registro')
    },
    usuarioResgistrado:(req,res)=>{
        let passEncriptada = bcrypt.hashSync(req.body.contrasenia, 12)

        let errors = validationResult(req)
        let contraseñas_invalidas = 'las contraseñas no coinciden'
        if(req.body.contrasenia === req.body.rePassword){
            if(errors.isEmpty()){
                db.Usuario.create({
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    email : req.body.email,
                    contrasenia : passEncriptada,
                    tipo : 'usuario'
                })
                .then(function(){
                    res.redirect('/users/login')
                })
            }else{
                res.render('usuario/registro',{errors:errors.errors})
            }
        }else{
            res.render('usuario/registro',{errorContrasenias:contraseñas_invalidas})
        }
    },
    perfil:(req,res,next)=>{
        db.Usuario.findByPk(req.params.id)
        .then(usuario=>{
            res.render('usuario/perfil',{usuario})
        })
    },
    actualizarPerfil:(req,res,next)=>{
        db.Usuario.update({
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            direccion: req.body.direccion
        },{
            where:{id:req.params.id}
        })
        .then(usuario=>{
            console.log(req.body);
            res.redirect('/')
        })
    },
    eliminarCuenta:(req,res)=>{
        db.Usuario.destroy(
            {
                where:{id:req.params.id}
            }
        )
        .then(usuario=>{
            req.session.usuarioLogueado = undefined
            res.redirect('/')
        })
    }
}
module.exports=userController;

      