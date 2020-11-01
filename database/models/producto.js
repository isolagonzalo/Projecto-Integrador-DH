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
        descripcion:{
            type : dataTypes.TEXT
        },
        cantidad:{
            type : dataTypes.INTEGER
        },
        descuento:{
            type : dataTypes.DOUBLE
        },
        categoria_id:{
            type : dataTypes.INTEGER
        },
        talle_id:{
            type : dataTypes.INTEGER
        },
        color_id:{
            type : dataTypes.INTEGER
        },
        imagen:{
            type : dataTypes.STRING
        }
    }

    let config ={
        tableName : 'productos',
        timestamps: false
    }

    let Producto = sequelize.define(alias,cols,config);

    return Producto

}