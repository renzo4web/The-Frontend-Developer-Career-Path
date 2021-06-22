class App {
  constructor() {
    this.$btnDraw = document.querySelector(".btn-draw");
    this.$cards = document.querySelectorAll(".card");
    this.$counterRemaining = document.querySelector("#remaining-counter");
    this.$title = document.querySelector("h1");
    this.$modal = document.querySelector(".modal");

    this.scores = {
      human: 0,
      computer: 0,
    };

    this.currentDeck;
    this.currRemaining;

    this.apiEndpoints = {
      newDeck: "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/",
      drawCards({ id, count }) {
        return `https://apis.scrimba.com/deckofcards/api/deck/${id}/draw/?count=${count}`;
      },
      shuffleDeck({ id }) {
        return `https://apis.scrimba.com/deckofcards/api/deck/${id}/shuffle/`;
      },
    };

    this.initEvents();
  }

  async asyncWrapper(promise) {
    const [result] = await Promise.allSettled([promise]);
    // Handle Error
    const { reason, state, value } = result;

    if (state === "rejected") {
      console.warn(reason);
      return;
    }
    const deck = await value.json();
    return deck;
  }

  async getDeck() {
    if (this.currentDeck?.deck_id && this.currRemaining > 2) return;
    console.log("OBTENGO DEck");
    this.scores = {
      human: 0,
      computer: 0,
    };
    this.currentDeck = await this.asyncWrapper(
      fetch(this.apiEndpoints.newDeck)
    );
  }

  getWinner() {
    const { computer, human } = this.scores;

    let title = "";

    if (computer === human) {
      title = `🤖: ${computer}  DRAW 💪:${human} `;
    }
    if (this.scores.computer > this.scores.human) {
      title = `🤖 ROBOT WINS ${computer} `;
    } else {
      title = `HUMAN WINS 💪 ${human}`;
    }

    this.$title.textContent = title;

    this.$modal.classList.add("open");
  }

  async getCards() {
    const { deck_id: id } = this.currentDeck;

    /* Reshuffle the Cards*/

    // const { shuffled } = await this.asyncWrapper(
    //   fetch(this.apiEndpoints.shuffleDeck({ id }))
    // );
    // /* Update cards obj*/

    // this.currentDeck = { ...this.currentDeck, shuffled };

    return await this.asyncWrapper(
      fetch(this.apiEndpoints.drawCards({ id, count: 2 }))
    );
  }

  getScore(cards) {
    const getValues = cards.map(({ value }) => {
      if (value.includes("ACE")) {
        return 11;
      }

      if (isNaN(value)) {
        return 10;
      }

      return Number(value);
    });

    const [computer, human] = getValues;

    if (computer === human) {
      this.scores.computer++;
      this.scores.human++;
    }

    if (computer > human) {
      this.scores.computer++;
    } else {
      this.scores.human++;
    }
  }

  async displayCards() {
    const body = await this.getCards();

    const { cards, remaining } = body;
    this.currRemaining = remaining;
    this.$counterRemaining.textContent = remaining;

    console.log({ remaining });
    this.getScore(cards);

    if (this.currRemaining === 2) {
      this.$counterRemaining.textContent = 0;
      this.getWinner();
      this.getDeck();
    }

    this.$cards.forEach((card, i) => {
      const { image, value, suit, code } = cards[i];
      card.innerHTML = ` <p class='score'>${
        i === 0
          ? `Computer : ${this.scores.computer}`
          : `Human : ${this.scores.human}`
      }</p>
        <img src="${image}" alt="${value} ${suit}">
        <p>VALUE:${value}</p> 
      `;
    });
  }

  async draw() {
    /* Display Two Cards  */
    if (this.$modal.classList.contains("open")) {
      this.$modal.classList.remove("open");
    }

    this.$btnDraw.disabled = true;
    await this.getDeck();
    this.displayCards();
    setTimeout(() => (this.$btnDraw.disabled = false), 1000);
  }

  initEvents() {
    this.$btnDraw.addEventListener("click", this.draw.bind(this));
  }
}

new App();
