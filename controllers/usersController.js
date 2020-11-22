let db = require('../database/models')
let bcrypt = require('bcrypt')
let {check, validationResult, body}= require('express-validator')


const userController = {
    login:(req,res)=>{
        
        res.render('usuario/login')
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
                    contrasenia : passEncriptada
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
    }
}
module.exports=userController;
/*let errores = validationResult(req);
            let usuario = db.Usuario.findAll()
            
            if (errores.isEmpty()){
                
                var usuarioALoguearse
                for (var i = 0 ; i < usuario.length ; i ++){
                    if (usuario[i].email == req.body.email){
                        if (bcrypt.compareSync(req.body.contraseña , usuario[i].contrasenia)){
                            var  usuarioALoguearse = usuario[i];
                            console.log(usuario.findByPk(i).contrasenia)
                        }
                    }
                }
                
                
                if (usuarioALoguearse == undefined){
                    return res.render('usuario/login', {errores:[{msg : 'credenciales invalidas'}]});
                };
                console.log(usuarioALoguearse)
                req.session.usuarioLogueado = usuarioALoguearse;
                res.redirect('/');
                // EMAIL COOKIES
                /*
                if (usuarioALoguearse != undefined){
                    res.cookie('recordame', usuarioLoguearse.email, { maxAge :  60000} )
                }
                
                // CONTRASEÑA COOKIES
                if (req.body.recordame != undefined){
                    res.cookie('recordameContraseña', usuarioLoguearse.contraseña, { maxAge :  60000} )
                }
                
            }else{
                
                return res.render('usuario/login',{errores : errores})
            } */