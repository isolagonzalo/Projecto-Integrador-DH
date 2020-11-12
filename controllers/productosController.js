let db = require('../database/models')

const produtosController = {
    productos:(req,res)=>{
        db.Producto.findAll(
            {
            include: ['imagenes']
            })
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
            cantidad : req.body.cantidad,
            descuento : req.body.descuento,
            categoria : req.body.categoria,
            talle_id : req.body.talle_id,
        })
        .then(function(e){
            console.log(e);
            for(let i=0; i< req.files.length; i++){
                db.Imagen.create({
                    imagen:req.files[i].filename,
                    producto_id:e.id
                })
            }
            res.redirect('/productos')
        })
    },
    detalle:(req,res)=>{
        db.Producto.findByPk(req.params.id,{
            include:['imagenes']
        })
        .then(producto=>{
            res.render('productos/detalle',{producto:producto}) 
        })   
    }
}
module.exports = produtosController;