var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagintion: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextel: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});