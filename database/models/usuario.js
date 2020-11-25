module.exports = function(sequelize,dataTypes){
    let alias = "Usuario";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre:{
            type : dataTypes.STRING
        },
        email:{
            type : dataTypes.STRING
        },
        contrasenia:{
            type : dataTypes.STRING
        },
        telefono:{
            type : dataTypes.DOUBLE
        },
        direccion:{
            type : dataTypes.STRING
        },
        tipo:{
            type : dataTypes.STRING
        }
    }

    let config ={
        tableName : 'usuarios',
        timestamps: false
    }

    let Usuario = sequelize.define(alias,cols,config);
    Usuario.associate = function(models){
    Usuario.hasMany(
        models.Carrito, 
        {
            as : 'carrito',
            foreignKey: 'usuario_id'     
        }
        )
    }
    return Usuario

}