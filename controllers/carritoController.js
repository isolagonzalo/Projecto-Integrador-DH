let db = require('../database/models')
const { producto } = require('./productosController')

const carritoController = {
    carrito:(req,res)=>{
        db.Carrito.findOne({include:['carritos'],where:{usuario_id:req.session.usuarioLogueado.id,estado:'abierto'}
        })
        .then(carrito=>{
            if(carrito == undefined){
                res.send('no hay productos')
            }else{
                db.Carrito_producto.findAll({
                    include:['producto','img'],
                    where:{carrito_id:carrito.id}})
                    .then(carritoProductos=>{
                        if(req.session.usuarioLogueado!=undefined){
                            for(let i = 0 ; i < carritoProductos.length ; i++){
                                carritoProductos[i].producto.precioConDescuento = carritoProductos[i].producto.precio -  carritoProductos[i].producto.precio * (carritoProductos[i].producto.descuento / 100)
                            }
                            res.render('principales/carrito',{productos:carritoProductos,usuario:req.session.usuarioLogueado})
                        }
                    })
                
            }
        })
    }
}

module.exports=carritoController;