document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel')
    M.Carousel.init(elementosCarousel, {
        duration: 1500,
        dist: -100,
        shift: 5,
        padding: 5,
        numVisible: 8,
        indicators: true,
        noWrap: false,
    });
});