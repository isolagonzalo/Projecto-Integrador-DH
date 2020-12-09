let db = require('../database/models')

const indexController = {
    inicio: function(req, res){   
        db.Producto.findAll(
            {
                include:['imagenes']
            }
        )
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].estado === 'activo'){
                    producto.push(productos[i])
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('principales/index',{usuario : req.session.usuarioLogueado , productos:producto});
            }else{
                res.render('principales/index',{productos:producto})
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
            res.cookie('recordame', undefined)
            req.session.usuarioLogueado = undefined
            res.redirect('/')
        }
    }
}
module.exports= indexController;