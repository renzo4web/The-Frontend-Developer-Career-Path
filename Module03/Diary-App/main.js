const form = document.getElementById('entryForm');
const submit = document.querySelector('.button');
const entriesSection = document.getElementById('entries');
const textBox = document.querySelector('.entry-textbox');
const clear = '';

form.addEventListener('submit', addEntryToDom);

function addEntryToDom(event) {
  event.preventDefault();
  const textFromForm = textBox.value;
  createEntry(textFromForm);
  textBox.value = clear;
}

const createEntryBtn = () => {
  const btnEntry = document.createElement('button');
  btnEntry.classList.add('display-entry-button');
  const icon = document.createElement('li');
  icon.classList.add('far');
  icon.classList.add('fa-trash-alt');
  btnEntry.appendChild(icon);
  return btnEntry;
};

function createEntry(text) {
  const entryDiv = document.createElement('div');
  entryDiv.classList.add('single-entry');
  entryDiv.textContent = text;
  entryDiv.style.backgroundColor = randomColor();
  entryDiv.appendChild(createEntryBtn());
  entriesSection.insertAdjacentElement('afterbegin', entryDiv);
}

function randomColor() {
  let colors = [];
  for (let index = 0; index < 3; index++) {
    let color = Math.floor(Math.random() * 200);
    colors.push(color);
  }
  return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
}
