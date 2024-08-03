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
