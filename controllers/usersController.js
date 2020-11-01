const userController = {
    login:(req,res)=>{
        res.render('usuario/login')
    },
    registro:(req,res)=>{
        res.render('usuario/registro')
    }
}
module.exports=userController;