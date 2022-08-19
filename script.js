"use script";

const slides = document.querySelectorAll(".work-slide");
const works = document.querySelector(".works-slide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

let slideIndex = 0;
const avg = Math.floor(slides.length / 2);
const angleDetails = {};
let newAngle, maxLimit, minLimit;

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
  });
};

const moveLeft = function () {
  slideIndex -= 1;
  slides.forEach((el, i) => {
    if (slideIndex < minLimit) {
      newAngle = `translateX(${angleDetails[i] - 400}%)`;
    } else {
      newAngle = `translateX(${angleDetails[i] + 100}%)`;
    }
    el.style.transform = newAngle;
    newAngle = Number(el.style.transform.slice(10).slice(1).replace("%)", ""));
    angleDetails[i] = newAngle;
  });
  if (slideIndex < minLimit) slideIndex = maxLimit;
};

const moveRight = function () {
  slideIndex += 1;

  slides.forEach((el, i) => {
    newAngle =
      slideIndex > maxLimit
        ? `translateX(${angleDetails[i] + 400}%)`
        : `translateX(${angleDetails[i] - 100}%)`;
    el.style.transform = newAngle;
    newAngle = Number(el.style.transform.slice(10).slice(1).replace("%)", ""));
    angleDetails[i] = newAngle;
  });
  if (slideIndex > maxLimit) slideIndex = minLimit;
};

// goToSlide(2);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") moveRight();
  if (e.key === "ArrowLeft") moveLeft();
});

function reportWindowSize() {
  if (window.innerHeight < 500) {
    goToSlide(0);
    maxLimit = 4;
    minLimit = 0;
  } else {
    goToSlide(2);
    maxLimit = 2;
    minLimit = -2;
  }
}

reportWindowSize();
// window.onresize = reportWindowSize;
