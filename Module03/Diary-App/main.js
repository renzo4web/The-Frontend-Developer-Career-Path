const form = document.getElementById('entryForm');
const submit = document.querySelector('.button');
const entriesSection = document.getElementById('entries');
const textBox = document.querySelector('.entry-textbox');
const navBtns = document.querySelector('.entries-nav');
const entriesShow = document.querySelector('.entries-show');
const clear = '';

// TODO Fix btn count when is submited
let countBtn = 0;
let entries = JSON.parse(localStorage.getItem('localEntry'));
localStorage.setItem('localEntry', JSON.stringify(entries));

if (entries.length > 0) {
  countBtn = entries.length + 1;
  entries = JSON.parse(localStorage.getItem('localEntry'));
}




function createObjEntry(input, time) {
  let putEntry = {
    text: input,
    time: time,
  };
  entries.push(putEntry);
  localStorage.setItem('localEntry', JSON.stringify(entries));
}

form.addEventListener('submit', addEntryToDom);

function addEntryToDom(event) {
  event.preventDefault();
  const textFromForm = textBox.value;
  createObjEntry(textFromForm, createdOn());
  countBtn++;
  navBtns.appendChild(createEntryBtn(countBtn));
  btnListeners(document.querySelectorAll('.display-entry-button'));
  ifText(textFromForm);
  textBox.value = clear;
}

const createEntryBtn = (countBtn) => {
  const btnEntry = document.createElement('button');
  btnEntry.classList.add('display-entry-button');
  btnEntry.textContent = countBtn;
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

displaySavedEntry();

function displaySavedEntry() {
  if (entries.length > 0) {
    for (let index = 0; index < countBtn; index++) {
      navBtns.appendChild(createEntryBtn(index + 1));
      btnListeners(document.querySelectorAll('.display-entry-button'));
    }
  }
}


function showEntry(btn) {
  let targetIndex = parseInt(btn.currentTarget.textContent) - 1;
  let entriesSaved = JSON.parse(localStorage.getItem('localEntry'));
  let text = entriesSaved[targetIndex].text;
  let date = entriesSaved[targetIndex].time;
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
  text !== '' ? countBtn++ : countBtn;
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
