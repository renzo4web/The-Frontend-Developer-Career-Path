//Btns
const rollDice = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
// DOM
const mainMsg = document.getElementById('message');
//Player One
const oneScoreboard = document.getElementById('player1Scoreboard');
const dicePlayerOne = document.getElementById('player1Dice');
//Player TWo
const twoScoreboard = document.getElementById('player2Scoreboard');
const dicePlayerTwo = document.getElementById('player2Dice');

//score
const maxScore = 20;
let turn = 1;
let playerOne = 0;
let playerTwo = 0;
let diceNum;

rollDice.addEventListener('click', () => {
  diceNum = rollingDice();
  console.log(diceNum);
  gameTurnsAndSum(diceNum);
});

resetBtn.addEventListener('click', () => {
  resetDom();
  endGame(false);
});

function rollingDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function gameTurnsAndSum(rndNum) {
  //PLAYER ONE
  if (turn === 1) {
    playerOne += rndNum;
    displayOnDom(oneScoreboard, dicePlayerOne, playerOne);
    turn = 2;
    whoTurnIsNextText(2);
  } else {
    //PLAYER TWO
    playerTwo += rndNum;

    displayOnDom(twoScoreboard, dicePlayerTwo, playerTwo);
    turn = 1;
    whoTurnIsNextText(1);
  }

  if (playerOne >= maxScore) {
    console.log('Player One Win');
    endGame(true);
    mainMsg.textContent = 'Player 1 WIN!!! 🎉🎉';
  } else if (playerTwo >= maxScore) {
    console.log('Player two Win');
    mainMsg.textContent = 'Player 2 WIN!!! 🎉🎉';
    endGame(true);
  } else if (playerOne == playerTwo && playerOne >= maxScore && playerTwo >= maxScore) {
    mainMsg.textContent = '🙃!!!DRAW!!🙃 This Never Happen';
    endGame(true);
  }

  console.log(`Player one: ${playerOne}, Player Two :${playerTwo}`);
}

function whoTurnIsNextText(playerTurn) {
  if (playerTurn === 1) {
    mainMsg.textContent = 'Player 1 Turn ';
    diceActive(dicePlayerOne,dicePlayerTwo)
    return 1;
  } else if (playerTurn === 2) {
    mainMsg.textContent = 'Player 2 Turn ';
    diceActive(dicePlayerTwo,dicePlayerOne)
    return 2;
  }
}

function endGame(bool) {
  if (bool) {
    resetBtn.style.display = 'block';
    rollDice.style.display = 'none';
  } else {
    resetBtn.style.display = 'none';
    rollDice.style.display = 'block';
  }
}

function displayOnDom(playerScoreboard, diceOfPlayer, playerSum) {
  playerScoreboard.textContent = playerSum;
  diceOfPlayer.textContent = diceNum;
}

function diceActive(diceOfplayer,removeDice) {
  diceOfplayer.classList.add('active');
  removeDice.classList.remove('active');
}

function resetDom() {
  mainMsg.textContent = 'Player 1 Turn ';
  oneScoreboard.textContent = twoScoreboard.textContent = '0';
  dicePlayerOne.textContent = dicePlayerTwo.textContent = '-';
  playerOne = playerTwo = 0;
  turn = 1;
}
