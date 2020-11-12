let db = require('../database/models')

const indexController = {
    inicio: function(req, res){   
        db.Producto.findAll(
            {
                include:['imagenes']
            }
        )
        .then(productos =>{
            res.render('principales/index',{productos})
        })
        .catch(error => res.send(error))
    },
    comoComprar:(req,res)=>{
        res.render('principales/comoComprar')
    },
    contacto:(req,res)=>{
        res.render('principales/contacto')
    },
    carrito:(req,res)=>{
        res.render('principales/carrito')
    }
}
module.exports= indexController;