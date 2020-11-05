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
        apellido:{
            type : dataTypes.STRING
        },
        email:{
            type : dataTypes.STRING
        },
        contrasenia:{
            type : dataTypes.STRING
        },
        telefono:{
            type : dataTypes.INTEGER
        },
        direccion_id:{
            type : dataTypes.INTEGER
        },
        avatar:{
            type : dataTypes.STRING
        }
    }

    let config ={
        tableName : 'usuarios',
        timestamps: false
    }

    let usuarios = sequelize.define(alias,cols,config);

    return usuarios

}