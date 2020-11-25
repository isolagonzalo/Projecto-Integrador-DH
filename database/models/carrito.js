module.exports = function(sequelize,dataTypes){
    let alias = "Carrito";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        estado:{
            type : dataTypes.STRING
        },
        usuario_id:{
            type : dataTypes.INTEGER
        }
    }
    let config ={
        tableName : 'carritos',
        timestamps: false
    }

    let Carrito = sequelize.define(alias,cols,config);
    Carrito.associate = function(models){
    Carrito.belongsTo(
        models.Usuario,
        {
            as : 'carrito',
            foreignKey: 'usuario_id'     
        }
        ),
    Carrito.hasMany(
        models.Carrito_producto,
        {
            as : 'carrito_producto',
            foreignKey : 'carrito_id'
        }
        )
    }
    return Carrito
}