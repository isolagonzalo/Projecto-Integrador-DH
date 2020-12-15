module.exports = function(sequelize,dataTypes){
    let alias = "Producto";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre:{
            type : dataTypes.STRING
        },
        precio:{
            type : dataTypes.DOUBLE
        },
        cantidad:{
            type : dataTypes.INTEGER
        },
        descuento:{
            type : dataTypes.DOUBLE
        },
        categoria:{
            type : dataTypes.STRING
        },
        talle_id:{
            type : dataTypes.INTEGER
        },
        estado:{
            type : dataTypes.STRING
        }
    }
    let config ={
        tableName : 'productos',
        timestamps: false
    }

    let Producto = sequelize.define(alias,cols,config);
    Producto.associate = function(models){
    Producto.hasMany(
        models.Imagen, 
        {
            as : 'imagenes',
            foreignKey: 'producto_id'     
        }
        )
    Producto.belongsToMany(
        models.Carrito,
        {
            as : 'carritos',
            through: 'carrito_producto',
            foreignKey : 'producto_id',
            otherKey: 'carrito_id',
            timestamps: false
        }
        )
}
    return Producto 
    

}