let formulario = document.querySelector('.formularioPerris');

formulario.addEventListener('submit', function(e){
    
    let errores = [];

//validar el e-mail
    let campoEmail = document.querySelector('#email');

    if(campoEmail.value ==""){
        errores.push('-Debe llenar el email')
    }
//validar contraseña
    let nombre = document.querySelector('#nombre');
    
    if(nombre.value ==""){
        errores.push('-Debe poner un nombre')
    }
//validar telefono
    let telefono = document.querySelector('#telefono');
    
    if(telefono.value =="" || telefono.value == 0 ){
        errores.push('-Debe poner un telefono')
    }
//validar direccion
    let direccion = document.querySelector('#direccion');
    
    if(direccion.value ==""){
        errores.push('-Debe poner un dirección')
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