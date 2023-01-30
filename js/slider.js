
const btnPrev = document.querySelector('.slider__btn-prev')
const btnNext = document.querySelector('.slider__btn-next')

//btnPrev.addEventListener('click', ()=> plusSlides(-1))


let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("my-slides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "flex";

  setTimeout(showSlides, 555000); // Change image every 2 seconds
}

showSlides();
