$(function(){

    var header = document.getElementById('header')
    var headroom = new Headroom(header);
    headroom.init()

})
$(function(){

    var header = document.getElementById('heade')
    var headroom = new Headroom(header);
    headroom.init()
    let carrito = document.querySelector('.divCarritoXD')
    //carrito.style.display= 'none'
    let claseHeader = document.querySelector('header')
    if(claseHeader.classList.contains("header headroom headroom--not-bottom headroom--not-top headroom--unpinned")){
        carrito.style.display ='block'
    }
})
$(function(){
    var carritoEfecto = document.getElementsByName('carritoAparecer')
    var header = document.getElementById('carritoAparecer')
    var headroom = new Headroom(header);
    headroom.init()


})
$(function(){
    var carritoEfecto = document.getElementsByName('menu--navegacion')
    var header = document.getElementById('menu--navegacion')
    var headroom = new Headroom(header);
    headroom.init()


})

