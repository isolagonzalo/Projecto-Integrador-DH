let db = require('../database/models')
let cantidadProductosCarrito = 0;
const produtosController = {
    productos:(req,res)=>{
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
                db.Carrito.findOne({include:['carritos'],where:{usuario_id:req.session.usuarioLogueado.id,estado:'abierto'}
            })
            .then(numeroCarrito=>{
                if(numeroCarrito){
                    db.Carrito_producto.findAll({where:{carrito_id:numeroCarrito.id}})
                .then(numeroTotal=>{
                    let numero;
                    numero = numeroTotal.length
                    console.log(numeroTotal.length);
                    res.render('principales/index',{usuario : req.session.usuarioLogueado , productos:producto , numero});
                })
                }else{
                    res.render('principales/index',{usuario : req.session.usuarioLogueado , productos:producto });
                }
            })
                
            }else{
                let usuario;
                res.render('productos/productos',{productos:producto,usuario:usuario})
            }
        })
    },
    crear:(req,res)=>{
        if(req.session.usuarioLogueado != undefined){
            res.render('productos/crear',{usuario : req.session.usuarioLogueado});
        }else{
            res.render('productos/crear')
        }
    },
    guardar:(req,res,next)=>{
        db.Producto.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            cantidad : req.body.cantidad,
            descuento : req.body.descuento,
            categoria : req.body.categoria,
            talle_id : req.body.talle_id,
            estado: 'activo'
        })
        .then(function(e){
            console.log(e);
            for(let i=0; i< req.files.length; i++){
                db.Imagen.create({
                    imagen:req.files[i].filename,
                    producto_id:e.id
            })
            .then(renderizar => {
                res.redirect('/') 
            })
        }
        })
    },
    detalle:(req,res)=>{
        db.Producto.findByPk(req.params.id,{
            include:['imagenes']
        })
        .then(producto=>{
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/detalle',{usuario : req.session.usuarioLogueado ,producto:producto});
            }else{
                res.render('productos/detalle',{producto:producto}) 
            }
            
        })   
    },
    producto:(req,res)=>{
        db.Producto.findByPk(req.params.id,{
            include: ['imagenes']
            })
        .then(producto=>{
            res.render('productos/editar',{producto})
        })
    },
    editar:(req,res)=>{
        db.Producto.update(
            {
                nombre: req.body.nombre,
                precio: req.body.precio,
                cantidad : req.body.cantidad,
                descuento : req.body.descuento,
                categoria : req.body.categoria,
                talle_id : req.body.talle_id,
            },
            {
                where:{id:req.params.id}
            })
            .then(function(e){
                res.redirect('/productos/')
            })
    },
    //ELIMINAR PRODUCTO

    eliminar:(req,res,next)=>{
        db.Producto.update(
            {
                estado: 'inactivo'
            },
            {
                where:{id:req.params.id}
            })
            .then(function(e){
                /*db.Carrito.findAll({
                    where:{estado:'abierto'}
                */
               res.redirect('/')
                })
                /*.then(carritosAbiertos=>{
                    for(let i = 0 ; i < carritosAbiertos.length ;){
                        
                       db.Carrito_producto.destroy({
                            where:{producto_id:req.params.id,carrito_id:carritosAbiertos[i].id}
                        })
                        .then(xd=>{})
                    }
                    
                })
            })*/
    },
    //CARRITO 
    agregarCarrito:(req,res)=>{
        // tengo el usuario id y el producto id
        //buscar un carrito abierto del usuario
        //si existe agregar el producto a ese carrito 
        // crear un carrito
        db.Carrito.findOne({where:{estado:'abierto',usuario_id:req.body.usuario_id}})
        .then(carritoEncontrado => {
            if(carritoEncontrado != undefined){
                //meter el producto a ese carrito
                db.Carrito_producto.create({
                    carrito_id: carritoEncontrado.id,
                    producto_id: req.body.producto_id
                })
                .then(carritoProductos =>{
                    res.redirect('/productos/detalle/'+req.body.producto_id)
                })
            }else{
                db.Carrito.create({
                    estado: 'abierto',
                    usuario_id: req.body.usuario_id
                })
                .then(carritoCreado =>{
                    db.Carrito_producto.create({
                        carrito_id: carritoCreado.id,
                        producto_id: req.body.producto_id
                    })
                    res.redirect('/productos/detalle/'+req.body.producto_id)
                })
            }
        })

        .then(carrito=>{
            db.Carrito_producto.create({
                carrito_id: carrito.id,
                producto_id: req.params.id
            })
            res.redirect('/')
        })
    },




    //categorias
    remeras:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            }
            )
        .then(productos =>{
            //console.log(productos)
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'remera'){
                    producto.push(productos[i])
                    producto.categoria = 'Todas las Remeras'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    },
    camisas:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'camisa'){
                    producto.push(productos[i])
                    producto.categoria = 'Todas las Camisas'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    },
    camperas:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'campera'){
                    producto.push(productos[i])
                    producto.categoria = 'Todas las Camperas'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    },
    buzos:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'buzo'){
                    producto.push(productos[i])
                    producto.categoria = 'Todas los Buzos'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    },
    conjuntos:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'conjunto'){
                    producto.push(productos[i])
                    producto.categoria = 'Todas los Conjuntos'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    },
    sacos:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'saco'){
                    producto.push(productos[i])
                    producto.categoria = 'Todas los Sacos y trajes'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    },
    chalecos:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'chaleco'){
                    producto.push(productos[i])
                    producto.categoria = 'Todas los Chalecos'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    },
    musculosas:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'musculosa'){
                    producto.push(productos[i])
                    producto.categoria = 'Todas las Musculosas'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    },
    jeans:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'jean'){
                    producto.push(productos[i])
                    producto.categoria = 'Todas los Jeans'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    },
    bermudas:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'bermuda'){
                    producto.push(productos[i])
                    producto.categoria = 'Todas las Bermudas'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    },
    pantalones:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'pantalon'){
                    producto.push(productos[i])
                    producto.categoria = 'Todas los Pantalones'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    },
    mallas:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'short de baño'){
                    producto.push(productos[i])
                    producto.categoria = 'Todas las Mallas y ropa de baño'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    },
    ropaInterior:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'ropa interior'){
                    producto.push(productos[i])
                    producto.categoria = 'short de baño'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    },
    calzado:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
        .then(productos =>{
            let producto = [];
            for(var i = 0; i < productos.length; i++){
                if(productos[i].categoria === 'calzado'){
                    producto.push(productos[i])
                    producto.categoria = 'Todos los Calzados'
                }
            }
            if(req.session.usuarioLogueado != undefined){
                res.render('productos/categoria',{usuario : req.session.usuarioLogueado ,producto});
            }else{
                res.render('productos/categoria',{producto})
            }
        })
        .catch(error => res.send(error))
    }
}
module.exports = produtosController;