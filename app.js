const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const body = document.querySelector('body');
const portfolio = document.querySelector('.portfolio-link');
const about = document.querySelector('.about-link');
const contact = document.querySelector('.contact-link');

function show() {
  menu.style.top = '0';
  body.style.overflow = 'hidden';
}

function close() {
  menu.style.top = '-150%';
  body.style.overflow = 'auto';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
portfolio.addEventListener('click', close);
about.addEventListener('click', close);
contact.addEventListener('click', close);
