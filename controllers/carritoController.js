let db = require('../database/models')

const carritoController = {
    carrito:(req,res)=>{
        db.Carrito.findAll({
            include:['carrito_producto']
        },{
          where:{usuario_id:req.params.id}  
        })
        .then(carrito=>{
            console.log(carrito);
            res.send(carrito)
        })
        
    }
}

module.exports=carritoController;