let formulario = document.querySelector('.formularioPerris');

formulario.addEventListener('submit', function(e){
    
    let errores = [];
//validar el nombre
    let campoNombre = document.querySelector('#nombre');

    if(campoNombre.value == ""){
        errores.push('-El campo nombre debe estar lleno')
    }else if(campoNombre.value.length<2){
        errores.push('-El nombre debe tener al menos 2 caracteres')
    }

    
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

//validar confirmar contraseña 
    let confirmarContraseña = document.querySelector('#rePassword');
    
    if(confirmarContraseña.value ==""){
        errores.push('-Debe llenar la confirmacion de contraseña')
    }
//validar que sean iguales las contraseñas 
    if(contraseña.value!=confirmarContraseña.value){
        errores.push('-Las contraseñas no coinciden')
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
