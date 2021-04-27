const grid = document.querySelector('.grid');
const input = document.getElementById('search');
const modalInner = document.querySelector('.modal-inner');

const loadCardShow = (show, container) => {
  const { id, image, name, summary, rating } = show;

  const seasons = show?._embedded?.seasons;

  const season = `<p>Seasons:${seasons && seasons.length}<p>`;
  const html = `
  <div id='${id}' class="show" data-title="${name}">
      <img src='${
        image ? image.medium : 'https://via.placeholder.com/150/92c952'
      }' alt="anmeOfShow">
      <h3 class="show__title">${name}</h3>
      <div class="show__summary">${summary}</div>
      ${container === modalInner ? season : ''}
      <h5 class="show__rating">Rating : ${rating.average}</h5>
      <button class="btn-info" aria-label="more info">More Info</button>
  </div>
  `;

  container.insertAdjacentHTML('beforeend', html);
};

const fetchApi = async (query = 'the-office') => {
  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query}&embed=seasons`
    );
    const body = await response.json();
    return body;
  } catch (error) {
    console.warn(error);
  }
};

const fetchSingleShow = async (name) => {
  try {
    const res = await fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${name}&embed=seasons`
    );
    const show = await res.json();
    return show;
  } catch (error) {
    console.warn(error);
  }
};

const handleClik = async (event) => {
  if (event.key === 'Escape') {
    modalShow(false);
    return;
  }
  const { title } = event.target.parentElement.dataset;
  const singleShow = await fetchSingleShow(title);
  modalInner.innerHTML = '';
  loadCardShow(singleShow, modalInner);
  modalShow(true);
};

const initEvents = () => {
  const btns = document.querySelectorAll('.btn-info');
  const modalOuter = document.querySelector('.modal-outer');
  btns.forEach((btn) => btn.addEventListener('click', handleClik));
  modalOuter.addEventListener('click', () => modalShow(false));
  window.addEventListener('keydown', handleClik);
};

const handleForm = (event) => {
  event.preventDefault();
  const inputValue = input.value.split(' ').join('-');
  displaySearchResult(inputValue);
};

const initFormEvents = () => {
  const form = document.querySelector('.search-form');
  form.addEventListener('submit', handleForm);
};

const loadShows = (shows, container) => {
  container.innerHTML = '';
  shows.forEach(({ show }) => loadCardShow(show, container));
};

const displaySearchResult = async (value) => {
  try {
    const shows = await fetchApi(value);
    loadShows(shows, grid);
    initEvents();
  } catch (error) {
    console.warn(error);
  }
};

const init = async () => {
  try {
    initFormEvents();
    const shows = await fetchApi();
    loadShows(shows, grid);
    initEvents();
  } catch (error) {
    console.warn(error);
  }
};

const modalShow = (show) => {
  if (show) {
    document.querySelector('.modal').style.display = 'flex';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    return;
  }
  const scrollY = document.body.style.top;
  document.querySelector('.modal').style.display = 'none';
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
};

init();
