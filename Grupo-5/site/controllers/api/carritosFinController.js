// ******** Sequelize ***********
let db = require('../../database/models');

const carritosFinController ={
    cantidadCarritos:(req,res,next)=>{
        db.Carrito.findAll({where:{estado: "finalizado"}})
        .then(carritosFinalizados=>{
            
            let cantidadCarritos = {
                cantidad:carritosFinalizados.length
            }
            res.json(cantidadCarritos)
        })
    }
}
module.exports = carritosFinController;