jQuery('document').ready(function($){
    var menuBton = $('.menu-icon'),
    menu = $ ('.navegacion ul');


    menuBton.click(function(){

        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else {
            menu.addClass('show');
        }

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel')
    M.Carousel.init(elementosCarousel, {
        duration: 1500,
        dist: -100,
        shift: 5,
        padding: 5,
        numVisible: 4,
        indicators: true,
        noWrap: false,
    });
});