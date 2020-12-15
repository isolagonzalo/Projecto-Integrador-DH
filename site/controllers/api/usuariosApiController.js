// ******** Sequelize ***********
let db = require('../../database/models');

const usuariosController ={
    cantidadUsuarios:(req,res,next)=>{
        db.Usuario.findAll()
        .then(usuarios=>{
            let cantidadUsuarios = {
                
                cantidad:usuarios.length
                
                
            }
            res.json(cantidadUsuarios)
        })
    }
}
module.exports = usuariosController;