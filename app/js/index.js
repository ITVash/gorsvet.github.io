'use strict';
const navz = document.querySelector('.nav');
const nav_brand = document.querySelector('.nav__brand .container .row');
const logo = document.querySelector('.nav__brand_logo');
const phone = document.querySelector('.nav__brand_telephon');
const menu = document.querySelector('.nav__menu .container .row');
const btn = document.querySelector('.nav__menu_btn');
const menuCol = document.querySelector('.nav__menu .container .row .mobile');
btn.addEventListener('click', e => {
  e.preventDefault();
  navz.classList.toggle('activ');
  menuCol.classList.toggle('show');
});
window.addEventListener('scroll', () => {
  if (this.scrollY >= 140) {
    navz.classList.add('fixed');
    //menu.appendChild(logo);
    menu.prepend(logo);
    menu.append(phone);
    //menu.appendChild(phone);
  } else if (this.scrollY <= 139) {
    navz.classList.remove('fixed');
    nav_brand.prepend(logo);
    menu.append(phone);
    nav_brand.appendChild(phone);
  }
});