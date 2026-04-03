


window.addEventListener('DOMContentLoaded', () => {
    createSwiper();
})

function createSwiper() {
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    autoplay : {delay : 3000},
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    });
}