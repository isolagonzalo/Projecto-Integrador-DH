let formulario = document.querySelector('.formularioPerris');
formulario.style.display= ''

formulario.addEventListener('submit', function(e){
    e.preventDefault();
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

//mostras errores
    if(errores.length>0){
        let listaErrores = document.querySelector('div.errores ul');
        listaErrores.innerHTML = ""
        for(let i = 0; i < errores.length; i++){
            listaErrores.innerHTML += "<li>" +errores[i]+ "</li>"
        }
    }
})