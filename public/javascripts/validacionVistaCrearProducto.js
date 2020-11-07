let formulario = document.querySelector('.formularioPerris');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
//validar el nombre
    let campoEmail = document.querySelector('#email');

    if(campoEmail.value ==""){
        errores.push('-Debe llenar el email')
    }
//validar contraseña
    let contraseña = document.querySelector('#password');
    
    if(contraseña.value ==""){
        errores.push('-Debe poner una contraseña')
    }
})