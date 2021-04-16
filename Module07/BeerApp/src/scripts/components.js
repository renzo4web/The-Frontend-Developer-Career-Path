import {fetchApi} from "./provider";
import {currentPageOnDOM, renderBeerCard} from "./page";
import {disabledAllBtns, getBtns} from "./controls.btn";
import {filtersABV, filtersIBU} from "./filters";

const [buttonsPage, ...buttonsFilter] = getBtns();
const [buttonsIBU, buttonsABV] = buttonsFilter;
const mainHTML = document.querySelector('main');
let currentPage = 1;
let currentAmountOfBeers = 0;


const renderAllBeers = (beers) => {
    currentAmountOfBeers = beers.length;
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
        : buttonsIBU).forEach(btn => btn.classList.remove('card__btn--clicked'));

    currentTarget.classList.add('card__btn--clicked');

};

const handleClickPage = ({currentTarget}) => {

    const amountOfBeersRequested = 25;

    const [btnRight, btnLeft] = buttonsPage;


    if (currentTarget === btnLeft && currentPage === 1) {
        btnLeft.disabled = true;
        return;
    } else {
        btnLeft.disabled = false;
    }


    if (currentTarget === btnRight && currentAmountOfBeers < amountOfBeersRequested) {
        btnRight.disabled = true;
        return;
    } else {
        btnRight.disabled = false;
    }


    (currentTarget.id === 'btnPageRight')
        ? currentPage += 1
        : currentPage -= 1;

    currentPageOnDOM(currentPage);
    renderPage(currentPage);
};

const eventHandlers = () => {
    const btnsFilter = buttonsFilter.flat();
    btnsFilter.forEach(btn => btn.addEventListener('click', handleClickFilters));
    buttonsPage.forEach(btn => btn.addEventListener('click', handleClickPage));
};


const init = async () => {
    await renderPage(currentPage);
    currentPageOnDOM(currentPage);
    eventHandlers();
};


export {
    init,
    currentPage,
    renderPage,
};