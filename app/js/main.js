   const swiper = new Swiper('.swiper-container', {
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2,

    spaceBetween: 30,

    initialSlide: 1,

    centeredSlides: true,

    loop: true
   });

   new Swiper('.news-slider', {
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,

    spaceBetween: 42,

    loop: true,
  });





let nav = document.querySelector('.header-menu');
let btnToggle = document.querySelector('.burger-menu');

btnToggle.onclick = function () {
  nav.classList.toggle('header-menu--active');
  nav.classList.toggle('header-menu--closed');
  btnToggle.classList.toggle('burger-menu--active');
  btnToggle.classList.toggle('burger-menu');

};

let card = document.querySelector('.cart_block');
let btnToggleCard = document.querySelector('.cart');

btnToggleCard.onclick = function () {
  card.classList.toggle('cart_block--active');
  card.classList.toggle('cart_block--closed');
};
  