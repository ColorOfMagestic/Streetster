let nav=document.querySelector(".header-menu"),btnToggle=document.querySelector(".burger-menu");btnToggle.onclick=function(){nav.classList.toggle("header-menu--active"),nav.classList.toggle("header-menu--closed"),btnToggle.classList.toggle("burger-menu--active"),btnToggle.classList.toggle("burger-menu")};let card=document.querySelector(".cart_block"),btnToggleCard=document.querySelector(".cart");btnToggleCard.onclick=function(){card.classList.toggle("cart_block--active"),card.classList.toggle("cart_block--closed")};const swiper=new Swiper(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:2,spaceBetween:30,initialSlide:1,centeredSlides:!0,loop:!0});new Swiper(".news-slider",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:3,spaceBetween:42,loop:!0,breakpoints:{320:{slidesPerView:1,spaceBetween:12},767:{slidesPerView:3,spaceBetween:42}}});