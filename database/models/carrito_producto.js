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
            models.Producto,
            {
                as : 'producto',
                foreignKey: 'producto_id'     
            })
        Carrito_producto.hasMany(
            models.Imagen,
            {
                as : 'img',
                foreignKey : 'producto_id',
                sourceKey: 'producto_id'
            }
            //targetKey cuando es belongs To 
            //sourceKey cuando es hasMany
        )
    }
    return Carrito_producto
}