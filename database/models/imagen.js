module.exports = function(sequelize,dataTypes){
    let alias = "Imagen";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        imagen:{
            type : dataTypes.STRING
        },
        producto_id:{
            type : dataTypes.INTEGER
        }
    }
    let config ={
        tableName : 'imgs',
        timestamps: false
    }

    let Imagen = sequelize.define(alias,cols,config);
    Imagen.associate = function(models){
    Imagen.belongsTo(
        models.Producto,
        {
            as : 'productos',
            foreignKey: 'producto_id'     
        }
        )
    }
    return Imagen

}