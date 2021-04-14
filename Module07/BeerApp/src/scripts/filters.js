import {currentPage, renderPage} from "./components";

let optionsABV = '';
let optionsIBU = '';

const filtersABV = (clicked) => {
    switch (clicked.id) {
        case "alcohol-vol-all":
            optionsABV = "";
            break;
        case "alcohol-vol-min":
            optionsABV = "&abv_lt=4.6";
            break;
        case "alcohol-vol-medium":
            optionsABV = "&abv_gt=4.5&abv_lt=7.6";
            break;
        case "alcohol-vol-max":
            optionsABV = "&abv_gt=7.5";
            break;
    }
    renderPage(currentPage);
};

const filtersIBU = (clicked) => {

    switch (clicked.id) {
        case "hoppiness-vol-all":
            optionsIBU = "";
            break;
        case "hoppiness-vol-min":
            optionsIBU = "&ibu_lt=35";
            break;
        case "hoppiness-vol-medium":
            optionsIBU = "&ibu_gt=34&ibu_lt=75";
            break;
        case "hoppiness-vol-max":
            optionsIBU = "&ibu_gt=74";
            break;
    }
    renderPage(currentPage);
};

export {
    filtersIBU,
    filtersABV,
    optionsIBU,
    optionsABV,
    currentPage
};