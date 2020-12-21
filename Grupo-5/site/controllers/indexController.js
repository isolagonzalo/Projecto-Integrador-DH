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
                db.Carrito.findOne({include:['carritos'],where:{usuario_id:req.session.usuarioLogueado.id,estado:'abierto'}
            })
            .then(numeroCarrito=>{
                db.Carrito_producto.findAll({where:{carrito_id:numeroCarrito.id}})
                .then(numeroTotal=>{
                    
                    let numero;
                    numero = numeroTotal.length
                    console.log(numeroTotal.length);
                    res.render('principales/index',{usuario : req.session.usuarioLogueado , productos:producto , numero});
                })
            })  
            }else{
                res.render('principales/index',{productos:producto})
            }
        })
        .catch(error => res.send(error))
    },
    comoComprar:(req,res)=>{
        if(req.session.usuarioLogueado != undefined){
            db.Carrito.findOne({include:['carritos'],where:{usuario_id:req.session.usuarioLogueado.id,estado:'abierto'}
        })
        .then(numeroCarrito=>{
            db.Carrito_producto.findAll({where:{carrito_id:numeroCarrito.id}})
            .then(numeroTotal=>{
                
                let numero;
                numero = numeroTotal.length
                console.log(numeroTotal.length);
                res.render('principales/comoComprar',{usuario : req.session.usuarioLogueado,numero})
            })
        })
            
        }else{
            res.render('principales/comoComprar')
        }
    },
    contacto:(req,res)=>{
        
        if(req.session.usuarioLogueado != undefined){
            db.Carrito.findOne({include:['carritos'],where:{usuario_id:req.session.usuarioLogueado.id,estado:'abierto'}
        })
        .then(numeroCarrito=>{
            db.Carrito_producto.findAll({where:{carrito_id:numeroCarrito.id}})
            .then(numeroTotal=>{
                
                let numero;
                numero = numeroTotal.length
                console.log(numeroTotal.length);
                res.render('principales/contacto',{usuario : req.session.usuarioLogueado,numero})
            })
        })
            
        }else{
            res.render('principales/contacto')
        }
    },
    carrito:(req,res)=>{
        if(req.session.usuarioLogueado != undefined){
            db.Carrito.findOne({include:['carritos'],where:{usuario_id:req.session.usuarioLogueado.id,estado:'abierto'}
        })
        .then(numeroCarrito=>{
            db.Carrito_producto.findAll({where:{carrito_id:numeroCarrito.id}})
            .then(numeroTotal=>{
                
                let numero;
                numero = numeroTotal.length
                console.log(numeroTotal.length);
                res.render('principales/carrito',{usuario : req.session.usuarioLogueado,numero})
            })
        })
           
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
    },
    listadoDeUsuarios:(req,res)=>{
        db.Usuario.findAll()
        .then(usuarios=>{
            res.render('principales/listaUsuarios',{usuarios:usuarios})
        })
    },
    listadoProductos:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            },
            )
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].estado === 'activo'){
                    producto.push(productos[i])
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('principales/listadoProductos',{usuario : req.session.usuarioLogueado , productos:producto});
            }else{
                let usuario;
                res.render('principales/listadoProductos',{productos:producto,usuario:usuario})
            }
        })
    },
    listadoOrdenes:(req,res)=>{
        db.Carrito.findAll({include:['carritos'],where:{estado:'finalizado'}})
        .then(carrito=>{
            if(carrito == undefined){
                res.send('no hay ordenes de compra')
            }else{
                db.Carrito_producto.findAll({
                    include:['producto','img']})
                    .then(carritoProductos=>{
                        if(req.session.usuarioLogueado!=undefined){
                            for(let i = 0 ; i < carritoProductos.length ; i++){
                                carritoProductos[i].producto.precioConDescuento = carritoProductos[i].producto.precio -  carritoProductos[i].producto.precio * (carritoProductos[i].producto.descuento / 100)
                            }
                            let total = 0;
                            for(let i = 0 ; i < carritoProductos.length ; i++){
                                total = total + carritoProductos[i].producto.precioConDescuento
                            }
                            
                            carritoProductos.total = total

                           
                           res.render('principales/listadoOrdenes',{carrito:carrito,productos:carritoProductos,usuario:req.session.usuarioLogueado})
                        }
                    })
                
            }
        })
        
    },
    orden:(req,res)=>{
                db.Carrito_producto.findAll({
                    include:['producto','img'],
                    where:{carrito_id:req.params.id}})
                    .then(carritoProductos=>{
                            db.Usuario.findByPk(req.params.idUsuario)
                            .then(usuario=>{
                                if(req.session.usuarioLogueado!=undefined){
                                    for(let i = 0 ; i < carritoProductos.length ; i++){
                                        carritoProductos[i].producto.precioConDescuento = carritoProductos[i].producto.precio -  carritoProductos[i].producto.precio * (carritoProductos[i].producto.descuento / 100)
                                    }
                                    let total = 0;
                                    for(let i = 0 ; i < carritoProductos.length ; i++){
                                        total = total + carritoProductos[i].producto.precioConDescuento
                                    }
                                    
                                    carritoProductos.total = total
                
                                   
                                    res.render('principales/orden',{ordenUsuario:usuario,productos:carritoProductos,usuario:req.session.usuarioLogueado})
                                }
                            })
                        })
        },
        compras:(req,res)=>{
            db.Carrito.findAll({
                where:{usuario_id : req.params.id, estado: 'finalizado'}
            })
            .then(carritos=>{
                if(req.session.usuarioLogueado != undefined){
                    res.render('principales/compras',{carrito:carritos,usuario:req.session.usuarioLogueado})
                }else{
                    res.render('principales/compras',{carrito:carritos})
                }
                })
        },
        compra:(req,res)=>{
            db.Carrito_producto.findAll({
                include:['producto','img'],
                where:{carrito_id:req.params.id}})
                .then(carritoProductos=>{
                        
                            if(req.session.usuarioLogueado!=undefined){
                                for(let i = 0 ; i < carritoProductos.length ; i++){
                                    carritoProductos[i].producto.precioConDescuento = carritoProductos[i].producto.precio -  carritoProductos[i].producto.precio * (carritoProductos[i].producto.descuento / 100)
                                }
                                let total = 0;
                                for(let i = 0 ; i < carritoProductos.length ; i++){
                                    total = total + carritoProductos[i].producto.precioConDescuento
                                }
                                
                                carritoProductos.total = total
            
                               
                                res.render('principales/compra',{productos:carritoProductos,usuario:req.session.usuarioLogueado})
                            }
                        })
        }
    }
module.exports= indexController;