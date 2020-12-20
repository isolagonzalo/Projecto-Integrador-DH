let db = require('../../database/models');

const productosController ={
    ultimoProductos:(req,res,next)=>{
        db.Producto.findOne({
            include: ['imagenes'], order : [["id", "DESC"]] ,where:{estado:"activo"}, 
        })
        .then(producto=>{
               
            let Productos = {
                id:producto.id,
                nombre:producto.nombre,
                precio:producto.precio,
                cantidad:producto.cantidad,
                descuento:producto.descuento,
                categoria:producto.categoria,
                estado:producto.estado,
                imagenRuta: producto.imagenes[0].imagen,
            }
            res.json(Productos)})
    }
}
module.exports = productosController;