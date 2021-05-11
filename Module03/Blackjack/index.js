const gameBoardEl = {
  btnStart: document.querySelector('.start-game-btn'),
  btnNewCard: document.querySelector('.new-card-btn'),
  messages: document.getElementById('message-el'),
  cards: document.getElementById('cards-el'),
  sum: document.getElementById('sum-el'),
  playerBet: document.getElementById('player-el'),
  renderResults() {
    this.cards.textContent = `Cards: ${player.currCards}`;
    this.sum.textContent = `Sum: ${player.sum}`;
    this.playerBet.textContent = `Per: $${player.bet}`;
  },
};

const checkSum = () => {
  player.sum = player.currCards.reduce((acc, val) => acc + val);
  if (player.sum > 21) {
    gameBoardEl.messages.textContent = "You're out of the game!";
    player.hasWin(false);
    return;
  }
  if (player.sum === 21) {
    gameBoardEl.messages.textContent = "You've got Blackjack!";
    player.hasWin(true);
    return;
  }

  gameBoardEl.messages.textContent = 'Do you want to draw a new card?';
};

const getCards = (num) => {
  if (num === 1) return Math.floor(Math.random() * 13) + 1;
  let cards = [];
  for (let i = 0; i < num; i++) {
    let rndCard = Math.floor(Math.random() * 13) + 1;
    cards.push(rndCard);
  }
  return cards;
};

const player = {
  bet: 200,
  currCards: [],
  sum: 0,
  text: '',
  startGame() {
    this.currCards = [];
    this.currCards = getCards(2);
    checkSum();
    gameBoardEl.renderResults();
  },
  newCard() {
    this.currCards.push(getCards(1));
    checkSum();
    gameBoardEl.renderResults();
  },
  hasWin(bool) {
    if (bool) {
      this.bet += 50;
      return;
    }
    this.bet -= 50;
    this.currCards = [];
    this.sum = 0;
  },
};

const handleClickStart = () => {
  player.startGame();
  console.log('player:', player);
};

const handleClickNewCard = () => {
  player.newCard();
  console.log('player:', player);
};

gameBoardEl.btnStart.addEventListener('click', handleClickStart);
gameBoardEl.btnNewCard.addEventListener('click', handleClickNewCard);
