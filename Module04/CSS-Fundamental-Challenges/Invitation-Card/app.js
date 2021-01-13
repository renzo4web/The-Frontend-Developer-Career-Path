const smile = document.querySelector('.smile-face');

function rotateSmile() {
  console.log('hola');
  smile.style.transform = 'rotate(180deg)';
  smile.style.transition = 'transform 0.5';
}

smile.addEventListener('click', rotateSmile);

smile.addEventListener('mouseover', rotateSmile);
