const hamburger = document.querySelector('.nav__toggle');

hamburger.addEventListener('click', (e) => {
  console.log(e.target);
  console.log('click');
  document.querySelector('.header__nav').classList.toggle('open');
});

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link')) {
    document.querySelector('.header__nav').classList.remove('open');
  }
});
