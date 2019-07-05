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

const btn1 = document.querySelector('.nav__btn');
const mobM = document.querySelector('.nav__mobile');
const sec = document.querySelectorAll('section');
const foot = document.querySelector('footer');
const messIco = document.querySelector('.message__icon');
const mess = document.querySelector('.message');

messIco.addEventListener('click', e => {
  e.preventDefault();
  mess.classList.toggle('open');
  const phone = document.querySelector('#phone');
  phone.addEventListener('focus', e => {
    e.value = "text";
  });
  const send = document.querySelector('#send');
  send.addEventListener('click', e => {
    mess.classList.toggle('open');
  });
});

window.addEventListener('load' , () => {
  if (mess.focus() === false) mess.classList.toggle('open');
});

btn1.addEventListener('click', e => {
  e.preventDefault();
  navz.classList.toggle('activ');
  mobM.classList.toggle('show');
  foot.classList.toggle('goleft');
  for (let i = 0; i < sec.length; i++) {    
    sec[i].classList.toggle('goleft');
  }
});

window.addEventListener('scroll', () => {
  if (this.scrollY >= 70) {
    navz.classList.add('fixed');
  } else if (this.scrollY <= 69) {
    navz.classList.remove('fixed');
  }
});
var mapYa = document.querySelector(".map");
if (mapYa) {
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [47.990581, 37.806183],
      zoom: 15
    }),
    myPlacemark = new ymaps.Placemark([47.990581, 37.806183], {
      // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
      balloonContentHeader: "Донецкгорсвет",
      balloonContentBody: "<img src=\"./assets/templates/img/about.jpg\">",
      balloonContentFooter: "Адрес: г.Донецк ул.Горького д.50",
      hintContent: "Донецкгорсвет"
  });
  myMap.geoObjects.add(myPlacemark);
  /* myMap.hint.open(myMap.getCenter(), "Одинокий хинт без метки", {
    // Опция: задержка перед открытием.
    openTimeout: 1500
  }); */
  }
}