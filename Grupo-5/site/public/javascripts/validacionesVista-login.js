let formulario = document.querySelector('.formularioPerris');

formulario.addEventListener('submit', function(e){
    
    let errores = [];

//validar el e-mail
    let campoEmail = document.querySelector('#email');

    if(campoEmail.value ==""){
        errores.push('-Debe llenar el email')
    }
//validar contraseña
    let contraseña = document.querySelector('#password');
    
    if(contraseña.value ==""){
        errores.push('-Debe poner una contraseña')
    }

    if(errores.length>0){
        e.preventDefault();
        let listaErrores = document.querySelector('div.errores ul');
        listaErrores.innerHTML = ""
        for(let i = 0; i < errores.length; i++){
            listaErrores.innerHTML += "<li>" +errores[i]+ "</li>"
        }
    }
})