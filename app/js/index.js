'use strict';
const navz = document.querySelector('.nav');
const nav_brand = document.querySelector('.nav__brand .container .row');
const logo = document.querySelector('.nav__brand_logo');
const phone = document.querySelector('.nav__brand_telephon');
const menu = document.querySelector('.nav__menu .container .row');
const nav__menu = document.querySelector('.nav__menu');
const nav__menu_mobile = document.querySelector('.nav__menu .mobile');
const btn = document.querySelector('.nav__menu_btn');
const menuCol = document.querySelector('.nav__menu .container .row .mobile');
btn.addEventListener('click', e => {
  e.preventDefault();
  navz.classList.toggle('activ');
  //menuCol.classList.toggle('show');
  if (menuCol.classList.contains('show')) {
    nav__menu_mobile.classList.remove('show');
    setTimeout( () => {
      menu.append(nav__menu_mobile);
    }, 1010);
  } else {
    nav__menu.append(menuCol);
    setTimeout( () => {
      nav__menu_mobile.classList.add('show');
    }, 10);
    
  }
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