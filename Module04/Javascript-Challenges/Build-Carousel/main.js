const carouselItems = document.querySelectorAll('.carousel-item');
// Btns
const nextSlide = document.getElementById('carousel-button-next');
const prevSlide = document.getElementById('carousel-button-prev');
let count = 0;
let slides = Array.from(carouselItems);

prevSlide.addEventListener('click', moveToPrevSlide);

nextSlide.addEventListener('click', moveToNextSlide);

function moveToNextSlide() {
  //Pick Firs Element of the slide
  let initial = slides.shift();
  //take the element shifted and push to the end of the array
  slides.push(initial);
  // remove show to the initial
  initial.classList.remove('carousel-item-visible');
  // add visible to the current first element of the array
  slides[0].classList.add('carousel-item-visible');
}

function moveToPrevSlide() {
  //Pick the current elment visible that is index 0
  let initial = slides[0];
  //Last element of the slide
  let lastElement = slides.pop();
  lastElement.classList.add('carousel-item-visible');
  //the las element is move to the first place
  slides.unshift(lastElement);
  initial.classList.remove('carousel-item-visible');
}
