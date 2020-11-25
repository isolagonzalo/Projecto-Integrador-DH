module.exports = function(sequelize,dataTypes){
    let alias = "Carrito_producto";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        carrito_id:{
            type : dataTypes.INTEGER
        },
        producto_id:{
            type : dataTypes.INTEGER
        }
    }
    let config ={
        tableName : 'carrito_producto',
        timestamps: false
    }

    let Carrito_producto = sequelize.define(alias,cols,config);
    Carrito_producto.associate = function(models){
    Carrito_producto.belongsTo(
        models.Carrito,
        {
            as : 'carrito_producto',
            foreignKey: 'carrito_id'     
        }
        ),
    Carrito_producto.belongsTo(
        models.Producto,
        {
            as : 'producto_carrito',
            foreignKey : 'producto_id'
        }
        )
    }
    return Carrito_producto

}