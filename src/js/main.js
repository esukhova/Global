import "../scss/style.scss";
import "./ajax.js";

let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};

let body = document.querySelector("body");
if (isMobile.any()) {
  body.classList.add("touch");

  let menuIcon = document.querySelector(".menu__icon");
  let menuList = document.querySelector(".menu__list");
  menuIcon.addEventListener("click", function () {
    menuList.classList.toggle("open");
    menuIcon.classList.toggle("active");
  });
} else {
  body.classList.add("mouse");
}
