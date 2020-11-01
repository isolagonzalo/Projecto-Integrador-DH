const indexController = {
    inicio: function(req, res){   
        res.render('principales/index');
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