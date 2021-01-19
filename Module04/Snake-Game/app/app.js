const grid = document.getElementById('grid');
//DOM
const btnStart = document.getElementById('start');
const btnReset = document.getElementById('reset');
const score = document.getElementById('score');
const userScoreText = document.getElementById('userScore');
const inputName = document.getElementById('user');
const recordScore = document.getElementById('record');
// Global Vars
let record;
let scoreCount = 0;
let direction = 1;
let widthRow = 10;
let currentRow = widthRow;
let divsArr = [];
let snake = [3, 2, 1, 0];
let snakeLoop;
let rndNum;
btnStart.addEventListener('click', startGame);

gridDivs();

btnReset.addEventListener('click', () => {
  if(scoreCount > record){
    record = scoreCount
    recordScore.textContent = record
  }
  scoreCount = 0
  score.textContent = 0
  divsArr[rndNum].classList.remove('point');
  snake.forEach((i) => divsArr[i].classList.remove('snake'));
  clearInterval(snakeLoop)
  
});

function startGame() {
  
  userScoreText.textContent = inputName.value;
  inputName.style.display = 'none';
  snakeLoop = setInterval(move, 1000);
  rndSquarePoint();
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    console.log('arriba');
    direction = -widthRow;
  } else if (e.key === 'ArrowRight') {
    console.log('derecha');
    direction = 1;
  } else if (e.key === 'ArrowDown') {
    direction = widthRow;
  } else if (e.key === 'ArrowLeft') {
    direction = -1;
    console.log('izquierda');
  }
});

//Generate div for grid

function gridDivs() {
  for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.textContent = i;
    divsArr.push(div);
    grid.appendChild(div);
  }
}

function move() {
  const tails = snake.pop();
  // remove class from tails

  divsArr[tails].classList.remove('snake');

  // add square in the direcction we heading
  snake.unshift(snake[0] + direction);

  //add style
  try {
    divsArr[snake[0]].classList.add('snake');
  } catch {
    loseGame();
  }

  if (direction === 10) {
    currentRow += 10;
  } else if (direction === -10) {
    currentRow -= 10;
  }

  if (snake[0] >= currentRow && direction === 1) {

    loseGame();
  } else if (snake[0] < currentRow - widthRow && direction === -1) {

    loseGame();
  }
  sumPoint();
}

function rndSquarePoint() {
  rndNum = Math.floor(Math.random() * 98) + 1;
  divsArr[rndNum].classList.add('point');
}

function sumPoint() {
  if (snake[0] === rndNum) {
    divsArr[rndNum].classList.remove('point');
    console.log('PUNTO!!!');
    scoreCount++;
    score.textContent = scoreCount;
    rndSquarePoint();
    console.log(record);
  }
}

function drawSnake() {
  snake.forEach((i) => divsArr[i].classList.add('snake'));
}

function loseGame() {
  clearInterval(snakeLoop);
}


