$(document).ready(function(){
   /*$('.').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    });
   */

   var mySwiper = new Swiper ('.header-banner .swiper-2 .swiper-container', {

    loop: true,
    slidesPerView:1,
    autoplay:true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.header-banner .swiper-2  .swiper-button-next',
      prevEl: '.header-banner .swiper-2 .swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
   var mySwiper = new Swiper ('.banner-introduce .swiper-1 .swiper-container', {

    loop: true,
    slidesPerView:1,
    autoplay:true,

    navigation: {
      nextEl: '.banner-introduce .swiper-1  .swiper-button-next',
      prevEl: '.banner-introduce .swiper-1 .swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
   var mySwiper = new Swiper ('.banner-introduce-slider .swiper-2 .swiper-container', {

    loop: true,
    slidesPerView:1,
    autoplay:true,

    navigation: {
      nextEl: '.banner-introduce-slider .swiper-2  .swiper-button-next',
      prevEl: '.banner-introduce-slider .swiper-2 .swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
   var mySwiper = new Swiper ('.banner-benefit-community .swiper-2 .swiper-container', {

    loop: true,
    slidesPerView:1,
    autoplay:true,

    navigation: {
      nextEl: '.banner-introduce-slider .swiper-2  .swiper-button-next',
      prevEl: '.banner-introduce-slider .swiper-2 .swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
   var mySwiper = new Swiper ('.banner-benefit-community .swiper-3 .swiper-container', {

    loop: true,
    slidesPerView:1,
    autoplay:true,

    navigation: {
      nextEl: '.banner-introduce-slider .swiper-2  .swiper-button-next',
      prevEl: '.banner-introduce-slider .swiper-2 .swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
   var mySwiper = new Swiper ('.banner-discover .sider-bottom .swiper-container', {

    loop: true,
    slidesPerView:1,
    autoplay:true,

    navigation: {
      nextEl: '.banner-introduce-slider .swiper-2  .swiper-button-next',
      prevEl: '.banner-introduce-slider .swiper-2 .swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
   var mySwiper = new Swiper ('.home-row-partner .slider-box .swiper-container', {

    loop: true,
    slidesPerView:3,
    autoplay:true,
    spaceBetween: 25,
    
    navigation: {
      nextEl: '.banner-introduce-slider .swiper-2  .swiper-button-next',
      prevEl: '.banner-introduce-slider .swiper-2 .swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
        639: {
            slidesPerView: 1,
        },
    },
  })
});

  



