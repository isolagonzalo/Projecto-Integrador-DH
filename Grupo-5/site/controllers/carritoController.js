let db = require('../database/models')
const { producto } = require('./productosController')

const carritoController = {
    carrito:(req,res)=>{
        db.Carrito.findOne({include:['carritos'],where:{usuario_id:req.session.usuarioLogueado.id,estado:'abierto'}
        })
        .then(carrito=>{
            if(carrito == undefined){
                res.render('principales/carritoVacio')
            }else{
                db.Carrito_producto.findAll({
                    include:['producto','img'],
                    where:{carrito_id:carrito.id}})
                    .then(carritoProductos=>{
                        /*let productosActivos = []
                        for(let i = 0 ; i < carritoProductos.length ; i++ ){
                            if(carritoProductos[i].producto.estado=="activo"){
                                let element = carritoProductos[i]
                                productosActivos.push(element)
                            }
                        }*/
                        
                        if(req.session.usuarioLogueado!=undefined){
                            for(let i = 0 ; i < carritoProductos.length ; i++){
                                carritoProductos[i].producto.precioConDescuento = carritoProductos[i].producto.precio -  carritoProductos[i].producto.precio * (carritoProductos[i].producto.descuento / 100)
                            }
                            let total = 0;
                            for(let i = 0 ; i < carritoProductos.length ; i++){
                                if(carritoProductos[i].producto.estado=="activo"){
                                total = total + carritoProductos[i].producto.precioConDescuento
                                }
                            }
                            
                            carritoProductos.total = total

                           
                            res.render('principales/carrito',{carrito:carrito,productos:carritoProductos,usuario:req.session.usuarioLogueado})
                        }
                    })
                
            }
        })
    },
    productoBorrado:(req,res)=>{
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
                           db.Carrito_producto.destroy({
                               where:{id:req.params.id}
                           })
                           .then(productoBorrado=>{
                            res.redirect("/")
                        
                           })
                        }
                    })
                
            }
        })
    },
    carritoFinalizado:(req,res)=>{
        db.Carrito.update(
            {
                estado: 'finalizado'
            },
            {
                where:{id:req.body.carrito_id}
            })
            .then(carrito=>{
                db.Usuario.update({
                    telefono: req.body.telefono,
                    direccion: req.body.direccion
                },{
                    where:{id:req.body.usuario_id}
                })
                .then(usuario=>{
                    if(req.session.usuarioLogueado != undefined){
                        res.render('principales/compraFinalizada',{usuario:req.session.usuarioLogueado})
                    }else{
                        res.render('principales/compraFinalizada')
                    }
                    
                })
            })
    }
}

module.exports=carritoController;