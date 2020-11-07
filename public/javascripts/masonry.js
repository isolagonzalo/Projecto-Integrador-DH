window.addEventListener('load',function(){
  
  var elem = document.querySelector('.caja-productos');
  elem.style.display='block'
  var msnry = new Masonry( elem, {
  // options
  itemSelector: '.caja-producto',
});
})
