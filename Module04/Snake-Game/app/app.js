const grid = document.getElementById('grid');
let divsArr = [];
let snake = [0, 1, 2];
gridDivs();
let count = 1;

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    console.log('arriba');
  } else if (e.key === 'ArrowRight') {
    console.log('derecha');
    count += 1;
    move();
    //moveRight();
  } else if (e.key === 'ArrowDown') {
    console.log('abajo');
  } else if (e.key === 'ArrowLeft') {
    console.log('izquierda');
  }
});

//Generate div for grid

function gridDivs() {
  for (let i = 0; i < 81; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.textContent = i;
    divsArr.push(div);
    grid.appendChild(div);
  }
}

snake.forEach((segment) => {
  divsArr[segment].textContent = snake.indexOf(segment);
  divsArr[segment].classList.add('snake');
});

function move() {
  /*snake.forEach((segment) => {
    divsArr[segment].classList.remove('snake');
  });*/

  for (let i = count; snake.length <= 3; i++) {
    snake.push(i);
  }

  snake.forEach((segment) => {
    divsArr[segment].textContent = snake.indexOf(segment);
    divsArr[segment].classList.add('snake');
  });
}
