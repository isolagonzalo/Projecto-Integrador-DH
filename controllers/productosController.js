let db = require('../database/models')

const produtosController = {
    productos:(req,res)=>{
        db.Producto.findAll()
        .then(productos =>{
            res.render('productos/productos',{productos})
        })
        .catch(error => res.send(error))
    },
    crear:(req,res)=>{
        res.render('productos/crear')
    },
    guardar:(req,res,next)=>{
        db.Producto.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion : req.body.descripcion,
            cantidad : req.body.cantidad,
            descuento : req.body.descuento,
            categoria_id : req.body.categoria_id,
            talle_id : req.body.talle_id,
            color_id : req.body.color_id,
            imagen : req.files[0].filename
        })
        .then(function(){
            res.redirect('/productos')
        })
    },
    detalle:(req,res)=>{
        db.Producto.findPk(red.params.id)
        .then(producto =>{
            res.render('productos/detalle',{producto})
        })
        .catch(error => res.send(error))
    },
}
module.exports = produtosController;