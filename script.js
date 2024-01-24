const slider = document.querySelector('.slider');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let i = 0;
const slideWidth = 500;

nextButton.addEventListener('click', () => {
  i = (i + 1) % 8; 
  slider.style.transform = `translateX(${-slideWidth * i}px)`; 
});

prevButton.addEventListener('click', () => {
  i = (i - 1 + 8) % 8;
  slider.style.transform = `translateX(${-slideWidth * i}px)`; 
});