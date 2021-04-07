const btnPunchline = document.getElementById('btnGetPunchline');
const btnNewJoke = document.getElementById('btnNewJoke');
let joke = '';
const getJoke = async () => {
  const jokeUrl =
    'https://official-joke-api.appspot.com/jokes/programming/random';

  try {
    const resp = await fetch(jokeUrl);
    const [{ setup, punchline }] = await resp.json();
    return (joke = { setup, punchline });
  } catch (e) {
    console.warn(e);
  }
};

const addJokeToDom = ({ setup, punchline }) => {
  document.querySelector('.jokes').innerHTML = `
    <p class="setup-joke animate">${setup}</p>
    <p class="punchline-joke animate">${punchline}</p>
    `;
};

const initJoke = async () => {
  btnNewJoke.disabled = true;
  joke = await getJoke();
  addJokeToDom(joke);
  btnToggle(btnNewJoke, btnPunchline);
  btnNewJoke.disabled = false;
  console.log(joke);
};
const handleClickPunchline = () => {
  if (!joke) return;
  const domPunchline = document.querySelector('.punchline-joke');
  domPunchline.classList.add('visible');
  btnToggle(btnPunchline, btnNewJoke);
};

const btnToggle = (btnRemove, btnAdd) => {
  btnAdd.classList.add('visible');
  btnRemove.classList.remove('visible');
};

document.addEventListener('DOMContentLoaded', initJoke);
btnPunchline.addEventListener('click', handleClickPunchline);
btnNewJoke.addEventListener('click', initJoke);
