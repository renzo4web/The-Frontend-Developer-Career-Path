const btnIncrement = document.getElementById('increment-btn');
const btnSave = document.getElementById('save-btn');

const counter = {
  count: 0,
  saved: [],
  counterEl: document.getElementById('count-el'),
  saveEl: document.getElementById('save-el'),
  countPassenger() {
    this.count++;
    this.counterEl.textContent = this.count;
  },
  saveCount() {
    this.saved.push(this.count);
    this.count = 0;
    this.counterEl.textContent = this.count;
    this.saveEl.textContent = this.saved.join('-');
  },
};

btnIncrement.addEventListener('click', () => counter.countPassenger());
btnSave.addEventListener('click', () => counter.saveCount());
