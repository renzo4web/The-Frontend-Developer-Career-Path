const form = document.getElementById('entryForm');
const submit = document.querySelector('.button');
const entriesSection = document.getElementById('entries');
const textBox = document.querySelector('.entry-textbox');
const navBtns = document.querySelector('.entries-nav');
const entriesShow = document.querySelector('.entries-show');
const clear = '';
let count = 1;
let entries = [];


function createObjEntry(input, time) {
  let putEntry = {
    text: input,
    time: time,
  };
  entries.push(putEntry);
}

form.addEventListener('submit', addEntryToDom);

function addEntryToDom(event) {
  event.preventDefault();
  const textFromForm = textBox.value;
  createObjEntry(textFromForm, createdOn());
  navBtns.appendChild(createEntryBtn());
  btnListeners(document.querySelectorAll('.display-entry-button'));
  ifText(textFromForm);
  textBox.value = clear;
}

const createEntryBtn = () => {
  const btnEntry = document.createElement('button');
  btnEntry.classList.add('display-entry-button');
  btnEntry.textContent = count;
  return btnEntry;
};


function btnListeners(node) {
  btnEntries = node;
  btnEntries.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      entriesShow.textContent = '';
      showEntry(event);
    });
  });
}
function showEntry(btn) {
  let targetIndex = parseInt(btn.currentTarget.textContent);
  console.log(targetIndex);
  let text = entries[targetIndex - 1].text;
  let date = entries[targetIndex - 1].time;
  let showEntry = createEntry(text, date);
  entriesShow.insertAdjacentElement('afterbegin', showEntry);
}

function createEntry(text,  date) {
  const entryDiv = document.createElement('div');
  const time = document.createElement('time');
  const p = document.createElement('p');
  entryDiv.classList.add('single-entry');
  p.textContent = text;
  time.textContent = date;
  entryDiv.insertAdjacentElement('afterbegin', time);
  entryDiv.insertAdjacentElement('afterbegin', p);

  entryDiv.style.backgroundColor = randomColor();
  return entryDiv;;
}

function ifText(text) {
  text !== '' ? count++ : count;
}

function createdOn() {
  let today = new Date();
  let date = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;
  let hrs = `${today.getHours()}:${today.getMinutes()} `;
  return `${date} ${hrs}`;
}



function randomColor() {
  let colors = [];
  for (let index = 0; index < 3; index++) {
    let color = Math.floor(Math.random() * 200);
    colors.push(color);
  }
  return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
}
