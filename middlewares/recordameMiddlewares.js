

function recordameMiddlewares(req, res, next) {
    
    if (req.session.usuarioLogueado == undefined && req.cookies.recordame != undefined){
        let usuarios = db.usuario
            let usuarioALoguearse


            for (var i = 0 ; i < usuarios.length ; i ++){
                if (usuarios[i].email == req.cookies.recordame){
                    
                        usuarioALoguearse = usuarios[i];
                        break;
                    
                }
            }
        
            for (var i = 0 ; i < usuarios.length ; i ++){
                if (usuarios[i].contrasenia == req.cookies.recordameContraseña){
                    
                        usuarioALoguearse = usuarios[i];
                        break;
                    
                }
            };
            req.session.usuarioLogueado = usuarioALoguearse;
    }
}

module.exports = recordameMiddlewares