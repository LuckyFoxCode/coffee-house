'use strict';

const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.header__burger');

burgerBtn.addEventListener('click', function () {
  nav.classList.toggle('show');
});

window.addEventListener('resize', function (e) {
  if (e.currentTarget.innerWidth > 860) {
    nav.classList.remove('show');
  }
});
