var navMain = document.querySelector('.main-nav');
var navControl = document.querySelector('.main-nav__control-nav');

navMain.classList.remove('main-nav--nojs');

navControl.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
