let db = require('../../database/models');

const productosController ={
    cantidadProductos:(req,res,next)=>{
        db.Producto.findAll({where:{estado: "inactivo"}})
        .then(productos=>{
            let cantidadProductos = {
                cantidad:productos.length
            }
            res.json(cantidadProductos)
        })
    }
}
module.exports = productosController;