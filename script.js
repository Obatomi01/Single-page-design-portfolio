"use script";

const slides = document.querySelectorAll(".work-slide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

let slideIndex = 0;
const avg = Math.floor(slides.length / 2);

const translateImages = function () {
  slides.forEach(
    (el) => (el.style.transform = `translateX(${slideIndex * 100}%)`)
  );
};

const moveLeft = function () {
  slideIndex += 1;
  if (slideIndex > avg) {
    slideIndex = -avg;
  }
  translateImages();
};

const moveRight = function () {
  slideIndex -= 1;
  if (slideIndex < -avg) {
    slideIndex = avg;
  }
  translateImages();
};

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") moveRight();
  if (e.key === "ArrowLeft") moveLeft();
});
