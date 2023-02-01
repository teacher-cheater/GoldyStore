
//const btnPrev = document.querySelector('.slider__btn-prev')
//const btnNext = document.querySelector('.slider__btn-next')

////btnPrev.addEventListener('click', ()=> plusSlides(-1))


////let slideIndex = 0;

////function showSlides() {
////  let i;
////  const slides = document.getElementsByClassName("my-slides");

////  for (i = 0; i < slides.length; i++) {
////    slides[i].style.display = "none";
////  }

////  slideIndex++;

////  if (slideIndex > slides.length) {
////    slideIndex = 1;
////  }

////  slides[slideIndex - 1].style.display = "flex";

////  setTimeout(showSlides, 555000); // Change image every 2 seconds
////}

////showSlides();

////----slider-swiper
//new Swiper('.swiper', {
//  navigation: {
//    nextEl: "swiper-button-next",
//    prevEl: "swiper-button-prev",
//  },
//  pagination: {
//    el: '.swiper-pagination',
//    clickable: true,
//  },
//  grabCursor: true,
//  keyboard: {
//    enabled: true,
//    pageUpDown: true,
//  },
//  autoHeight: true,
//  watchOverfloy: true,
//  autoplay: {
//    delay: 3000,
//  },
//  speed: 600,
//  effect: 'fade',
//  breakpoints: {
//    320: {
//      slidePerView: 1,
//    },
//    480: {
//      slidePerView: 1,
//    },
//    992: {
//      slidePerView: 1,
//    },
//  },
//  preloadImages: false,
//  lazy: {
//    loadOnTransitionStart: false,
//    loadPrevNext: false,
//  },
//  watchSlidesProgress: true,
//  watchSlidesVisibility: true,
//})