const grid = document.getElementById('grid');
//DOM
const btnStart = document.getElementById("start")
const btnReset  =document.getElementById("reset")
const score = document.getElementById("score")
// Global Vars
let scoreCount = 0;
let direction = 1
let widthRow = 10;
let limistRow = widthRow
let divsArr = [];
let snake = [3,2,1,0];
let snakeLoop;
let rndNum;
btnStart.addEventListener("click",startGame)

btnReset.addEventListener("click",()=>{
  clearInterval(snakeLoop)
})





window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    console.log('arriba');
    direction = -widthRow
  } else if (e.key === 'ArrowRight') {
    console.log('derecha');
    direction = 1;
  } else if (e.key === 'ArrowDown') {
    direction = widthRow
    
  } else if (e.key === 'ArrowLeft') {
    direction = -1
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

  const tails =  snake.pop()
  // remove class from tails
  divsArr[tails].classList.remove("snake")
  
  // add square in the direcction we heading
  snake.unshift(snake[0] + direction)


  
  //add style
  divsArr[snake[0]].classList.add("snake")
  
  if(direction >= 10){
      limistRow += 10
  }else if(snake[0] + 1 >= limistRow){
      console.log("caiste afuera")
      clearInterval(snakeLoop)
    }
  console.log(limistRow)
  console.log(direction)
  sumPoint()


}

function rndSquarePoint() {
  rndNum = Math.floor(Math.random() * 98) +1
  divsArr[rndNum].classList.add("point")
  
}


function sumPoint() {
  

  if( snake[0] === rndNum ){
    divsArr[rndNum].classList.remove("point")
    console.log("PUNTO!!!")
    scoreCount ++
    score.textContent = scoreCount
    rndSquarePoint()
  }
  
}

function drawSnake() {
  
  snake.forEach(i => divsArr[i].classList.add("snake"))
}

function startGame() {
  gridDivs();
  snakeLoop = setInterval(move,1000)
  rndSquarePoint()
  drawSnake()
}



