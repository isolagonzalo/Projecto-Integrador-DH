// ******** Sequelize ***********
let db = require('../../database/models');

const productosController ={
    categorias:(req,res,next)=>{
        db.Producto.findAll({where:{estado: "activo"}})
        .then(productos=>{

        })
    }
}
module.exports = productosController;