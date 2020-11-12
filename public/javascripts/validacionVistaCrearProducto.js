let formulario = document.querySelector('.formularioPerris');
let campoNombre = document.querySelector('#nombre');

formulario.addEventListener('submit', function(e){
    
    let errores = [];
//validar el nombre
    let parrafoNombre = document.querySelector('#parrafo-nombre')
    let divNombre = document.querySelector('#div-nombre')
    let brNombre = document.querySelector('#br-nombre')
    if(campoNombre.value ==""){
        brNombre.style.display = "none"
        divNombre.style.display = "block"
        parrafoNombre.innerHTML ='*-DEBE LLENAR EL NOMBRE'
        errores.push('-Debe llenar el nombre')
    }
    campoNombre.addEventListener('click',function(){
        divNombre.style.display="none"
    })
//validar precio
    let campoPrecio = document.querySelector('#precio');
    let parrafoPrecio = document.querySelector('#parrafo-precio')
    let divPrecio = document.querySelector('#div-precio')
    let brPrecio = document.querySelector('#br-precio')
    if(campoPrecio.value ==""){
        brPrecio.style.display = "none"
        divPrecio.style.display = "block"
        parrafoPrecio.innerHTML ='*-DEBE LLENAR EL CAMPO DE PRECIO'
        errores.push('-Debe poner un precio')
    }
    campoPrecio.addEventListener('click',function(){
        divPrecio.style.display="none"
    })
    //validar cantidad
    let campoCantidad = document.querySelector('#cantidad');

    let parrafoCantidad = document.querySelector('#parrafo-cantidad')
    let divCantidad = document.querySelector('#div-cantidad')
    let brCantidad= document.querySelector('#br-cantidad')
    if(campoCantidad.value ==""){
        brCantidad.style.display = "none"
        divCantidad.style.display = "block"
        parrafoCantidad.innerHTML ='*-DEBE LLENAR LA CANTIDAD'
        errores.push('-Debe poner una cantidad')
    }
    campoCantidad.addEventListener('click',function(){
        divCantidad.style.display="none"
    })
    //validar descuento
    let campoDescuento= document.querySelector('#descuento');
    
    let parrafoDescuento = document.querySelector('#parrafo-descuento')
    let divDescuento = document.querySelector('#div-descuento')
    let brDescuento= document.querySelector('#br-descuento')
    if(campoDescuento.value ==""){
        brDescuento.style.display = "none"
        divDescuento.style.display = "block"
        parrafoDescuento.innerHTML ='*-DEBE LLENAR EL DESCUENTO'
        errores.push('-Debe poner un descuento')
    }
    campoDescuento.addEventListener('click',function(){
        divDescuento.style.display="none"
    })
    //validar categoria
    let campoCategoria = document.querySelector('#categoria');
    
    let parrafoCategoria = document.querySelector('#parrafo-categoria')
    let divCategoria = document.querySelector('#div-categoria')
    let brCategoria = document.querySelector('#br-categoria')
    brCategoria.style.display="none"
    if(campoCategoria.value ==""){
        brCategoria.style.display = "none"
        divCategoria.style.display = "block"
        parrafoCategoria.innerHTML ='*-DEBE ELEGIR UNA CATEGORIA'
        errores.push('-Debe poner la categoria')
    }
    campoCategoria.addEventListener('click',function(){
        divCategoria.style.display="none"
    })
    //validar talle
    let campoTalle = document.querySelector('#talle');
    
    let parrafoTalle = document.querySelector('#parrafo-talle')
    let divTalle = document.querySelector('#div-talle')
    let brTalle = document.querySelector('#br-talle')
    if(campoTalle.value ==""){
        brTalle.style.display = "none"
        divTalle.style.display = "block"
        parrafoTalle.innerHTML ='*-DEBE PONER EL TALLE'
        errores.push('-Debe poner el talle')
    }
    campoTalle.addEventListener('click',function(){
        divTalle.style.display="none"
    })
    //validar si hay una imagen principal
    
    let imagenPrincipal = document.querySelector('#img-principal');
    let parrafoImagen = document.querySelector('#parrafo-imagen')
    let divImagen = document.querySelector('#div-imagen')
    //let brImagen = document.querySelector('#br-imagen')
    if(imagenPrincipal.value ==""){
        //brColor.style.display = "none"
        divImagen.style.display = "block"
        parrafoImagen.innerHTML ='*-DEBE CARGAR AL MENOS LA IMAGEN PRINCIPAL'
        errores.push('-Debe poner la imagen')
    }
    imagenPrincipal.addEventListener('click',function(){
        divImagen.style.display="none"
    })


//mostrar errores
    if(errores.length>0){
        e.preventDefault();
        let listaErrores = document.querySelector('#total-errores');
        listaErrores.innerHTML = "*--DEBE LLENAR LOS CAMPOS--*"
    }
    campoNombre.addEventListener('click',function(){
        errores =""
    })
}
);