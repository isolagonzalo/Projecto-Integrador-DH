let db = require('../database/models')

function recordarUsuarioMiddleware (req,res,next){
    if(req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined){
        db.Usuario.findOne(
            {
                where:{email:req.cookies.recordame}
            }
        )
        .then(usuarioEncontrado=>{
            req.session.usuarioLogueado = usuarioEncontrado
        })
    }
    next()
}
module.exports=recordarUsuarioMiddleware;
