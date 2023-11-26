const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
  menuIcon.classList.toggle('menu-icon-close');
});
