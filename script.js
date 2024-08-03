const navVisibilityOff = () => {
  const mobileNav = document.getElementById("mobile-nav");
  mobileNav.classList.add("invisible");
};
const navVisibilityOn = () => {
  const mobileNav = document.getElementById("mobile-nav");
  mobileNav.classList.remove("invisible");
};

let body;
window.onload = function get_body() {
  let mediaQueryObj = window.matchMedia("(prefers-color-scheme: dark)");
  let isDarkMode = mediaQueryObj.matches;
  body = document.getElementsByTagName("body")[0];
  if (isDarkMode) {
    body.classList.add("dark");
  }
};

const turnOnDarkMode = () => {
  body.classList.add("dark");
};
const turnOffDarkMode = () => {
  body.classList.remove("dark");
};

const container = document.getElementById("container");
const slider = document.getElementById("slider");
const slides = document.getElementsByClassName("slide").length;
const buttons = document.getElementsByClassName("btn");

console.log(container);

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
  containerWidth = container.offsetWidth;
  setParams(containerWidth);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else {
    if (w < 901) {
      slidesPerPage = 2;
    } else {
      if (w < 1101) {
        slidesPerPage = 3;
      } else {
        slidesPerPage = 4;
      }
    }
  }
  slidesCount = slides - slidesPerPage;
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
  }
  currentMargin = -currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + "%";
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
  if (currentPosition >= slidesCount) {
    buttons[1].classList.add("inactive");
  }
}

setParams();

function slideRight() {
  if (currentPosition != 0) {
    slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%";
    currentMargin += 100 / slidesPerPage;
    currentPosition--;
  }
  if (currentPosition === 0) {
    buttons[0].classList.add("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
}

function slideLeft() {
  if (currentPosition != slidesCount) {
    slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
    currentMargin -= 100 / slidesPerPage;
    currentPosition++;
  }
  if (currentPosition == slidesCount) {
    buttons[1].classList.add("inactive");
  }
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
}
