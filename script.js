"use script";

const slides = document.querySelectorAll(".work-slide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

let slideIndex = 0;
const avg = Math.floor(slides.length / 2);

const moveImages = function () {
  slides.forEach(
    (el) => (el.style.transform = `translateX(${slideIndex * 100}%)`)
  );
};

btnLeft.addEventListener("click", function (e) {
  slideIndex += 1;
  if (slideIndex > avg) {
    slideIndex = -avg;
  }
  moveImages();
});

btnRight.addEventListener("click", function (e) {
  slideIndex -= 1;
  if (slideIndex < -avg) {
    slideIndex = avg;
  }
  moveImages();
});
