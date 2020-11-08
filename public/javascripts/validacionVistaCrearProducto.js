let formulario = document.querySelector('.formularioPerris');

formulario.addEventListener('submit', function(e){
    
    let errores = [];
//validar el nombre
    let campoNombre = document.querySelector('#nombre');
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
//validar descripcion
    
    let campoDescripcion = document.querySelector('#descripcion');

    let parrafoDescripcion = document.querySelector('#parrafo-descripcion')
    let divDescripcion = document.querySelector('#div-descripcion')
    let brDescripcion= document.querySelector('#br-descripcion')
    if(campoDescripcion.value ==""){
        brDescripcion.style.display = "none"
        divDescripcion.style.display = "block"
        parrafoDescripcion.innerHTML ='*-DEBE LLENAR EL CAMPO DE DESCRIPCION'
        errores.push('-Debe poner un precio')
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
    //validar categoria
    let campoCategoria = document.querySelector('#categoria');
    
    let parrafoCategoria = document.querySelector('#parrafo-categoria')
    let divCategoria = document.querySelector('#div-categoria')
    let brCategoria = document.querySelector('#br-categoria')
    if(campoCategoria.value ==""){
        brCategoria.style.display = "none"
        divCategoria.style.display = "block"
        parrafoCategoria.innerHTML ='*-DEBE LLENAR LA CATEGORIA'
        errores.push('-Debe poner la categoria')
    }
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
    //validar color
    let campoColor = document.querySelector('#color');
    
    let parrafoColor = document.querySelector('#parrafo-color')
    let divColor = document.querySelector('#div-color')
    let brColor = document.querySelector('#br-color')
    if(campoColor.value ==""){
        brColor.style.display = "none"
        divColor.style.display = "block"
        parrafoColor.innerHTML ='*-DEBE PONER EL COLOR'
        errores.push('-Debe poner el color')
    }
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


//mostrar errores
    if(errores.length>0){
        e.preventDefault();
        let listaErrores = document.querySelector('#total-errores');
        listaErrores.innerHTML = "*--DEBE LLENAR LOS CAMPOS--*"
        
    }
}
});