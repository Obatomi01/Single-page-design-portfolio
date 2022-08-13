"use script";

const slides = document.querySelectorAll(".work-slide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

let slideIndex = 0;
const avg = Math.floor(slides.length / 2);
const angleDetails = {};
let newAngle;

const translateImages = function () {
  slides.forEach((el, i) => {
    // el.style.transform = `translateX(${slideIndex * 100}%)`;
    // console.log(el, i);
    newAngle = el.style.transform.slice(10).slice(1).replace("%)", "");

    console.log(newAngle);
    console.log(el, i);
  });
  console.log(angleDetails);
};

const goToSlide = function (slide) {
  slides.forEach((el, i) => {
    el.style.transform = `translateX(${(i - slide) * 100}%)`;
    newAngle = Number(el.style.transform.slice(10).slice(1).replace("%)", ""));
    angleDetails[i] = newAngle;
  }); // remember that the centered element is on 0%
  console.log(angleDetails);
};

const moveLeft = function () {
  slideIndex -= 1;
  slides.forEach((el, i) => {
    if (slideIndex < -2) {
      newAngle = `translateX(${angleDetails[i] - 400}%)`;
    } else {
      newAngle = `translateX(${angleDetails[i] + 100}%)`;
    }
    el.style.transform = newAngle;
    newAngle = Number(el.style.transform.slice(10).slice(1).replace("%)", ""));
    angleDetails[i] = newAngle;
  });
  console.log(slideIndex);
  if (slideIndex < -2) slideIndex = 2;
};

const moveRight = function () {
  slideIndex += 1;

  slides.forEach((el, i) => {
    newAngle =
      slideIndex > 2
        ? `translateX(${angleDetails[i] + 400}%)`
        : `translateX(${angleDetails[i] - 100}%)`;
    // if (slideIndex > 2) {
    //   newAngle = `translateX(${angleDetails[i] + 400}%)`;
    //   slideIndex = -2;
    // } else {
    //   newAngle = `translateX(${angleDetails[i] - 100}%)`;
    // }
    el.style.transform = newAngle;
    newAngle = Number(el.style.transform.slice(10).slice(1).replace("%)", ""));
    angleDetails[i] = newAngle;
  });
  console.log(slideIndex);
  if (slideIndex > 2) slideIndex = -2;
};

goToSlide(2);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") moveRight();
  if (e.key === "ArrowLeft") moveLeft();
});

// TODO when the right button is clicked the each
// TODO i want to get the translate% and then use the gotten data to move the image when a button is clicked
