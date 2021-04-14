import {fetchApi} from "./provider";
import {renderBeerCard} from "./page";
import {disabledAllBtns, getBtns} from "./controls.btn";
import {filtersABV, filtersIBU} from "./filters";

const [buttonsPage, ...buttonsFilter] = getBtns();
const [buttonsIBU, buttonsABV] = buttonsFilter;
const mainHTML = document.querySelector('main');
let currentPage = 1;


const renderAllBeers = (beers) => {
    mainHTML.innerHTML = beers.map(renderBeerCard).join('');
};


const renderPage = async (page) => {
    try {
        disabledAllBtns(true);
        const arrayDataApi = await fetchApi(page);
        renderAllBeers(arrayDataApi);
        disabledAllBtns(false);
    } catch (e) {
        console.warn(e);
    }
};


const handleClickFilters = ({currentTarget}) => {

    currentTarget.id.includes('alcohol')
    ? filtersABV(currentTarget)
    : filtersIBU(currentTarget);

    (currentTarget.id.includes('alcohol')
     ? buttonsABV
     : buttonsIBU)
        .forEach(btn => btn.classList.remove('card__btn--clicked'));

    currentTarget.classList.add('card__btn--clicked');

};

const handleClickPage = ({currentTarget}) => {

    (currentTarget.id === 'btnPageRight')
    ? currentPage += 1
    : currentPage -= 1;

    renderPage(currentPage);
};

const eventHandlers = () => {
    const btnsFilter = buttonsFilter.flat();
    btnsFilter.forEach(btn => btn.addEventListener('click', handleClickFilters));
    buttonsPage.forEach(btn => btn.addEventListener('click', handleClickPage));
};


const init = async () => {
    await renderPage(currentPage);
    eventHandlers();
};


export {
    init,
    currentPage,
    renderPage,
};