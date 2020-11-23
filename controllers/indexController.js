let db = require('../database/models')

const indexController = {
    inicio: function(req, res){   
        db.Producto.findAll(
            {
                include:['imagenes']
            }
        )
        .then(productos =>{
            if(req.session.usuarioLogueado != undefined){
                res.render('principales/index',{usuario : req.session.usuarioLogueado , productos});
            }else{
                res.render('principales/index',{productos})
            }

        })
        .catch(error => res.send(error))
    },
    comoComprar:(req,res)=>{
        if(req.session.usuarioLogueado != undefined){
            res.render('principales/comoComprar',{usuario : req.session.usuarioLogueado})
        }else{
            res.render('principales/comoComprar')
        }
    },
    contacto:(req,res)=>{
        if(req.session.usuarioLogueado != undefined){
            res.render('principales/contacto',{usuario : req.session.usuarioLogueado})
        }else{
            res.render('principales/contacto')
        }
    },
    carrito:(req,res)=>{
        if(req.session.usuarioLogueado != undefined){
            res.render('principales/carrito',{usuario : req.session.usuarioLogueado})
        }else{
            res.render('principales/carrito')
        }
    },
    cerrarSesion:(req,res,next)=>{
        if(req.session.usuarioLogueado != undefined){
            req.session.usuarioLogueado = undefined
            res.redirect('/')
        }
    }
}
module.exports= indexController;