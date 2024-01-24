const slider = document.querySelector('.slider');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let counter = 0;
const slideWidth = 500;

nextButton.addEventListener('click', () => {
  counter = (counter + 1) % 8; 
  slider.style.transform = `translateX(${-slideWidth * counter}px)`; 
});

prevButton.addEventListener('click', () => {
  counter = (counter - 1 + 8) % 8;
  slider.style.transform = `translateX(${-slideWidth * counter}px)`; 
});