'use strict';
const navz = document.querySelector('.nav');
const head = document.querySelector('header');
const hTop = head.getBoundingClientRect().top;
//console.log(hTop);
window.addEventListener('scroll', () => {
  if (this.scrollY >= 140) {
    navz.classList.add('fixed');
  } else if (this.scrollY <= 139) {
    navz.classList.remove('fixed');
  }
});