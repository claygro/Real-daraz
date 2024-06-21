const slides = document.querySelectorAll(".slide");
counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
function prev() {
  if (counter < slides.length) {
    counter--;
    slideImg();
  }
}
function next() {
  if (counter < slides.length - 1) {
    counter++;
    slideImg();
  }
}
const slideImg = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};