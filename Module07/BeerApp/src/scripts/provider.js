import { optionsABV, optionsIBU} from "./filters";

const fetchApi = async (page) => {

    try {

        const beerApiUrl =
            `https://api.punkapi.com/v2/beers?${optionsABV}${optionsIBU}&page=${page}`;
        console.log(beerApiUrl);
        const response = await fetch(beerApiUrl);
        const data = await response.json();
        return data;
    } catch (e) {
        console.warn(e);
    }


};

export {
    fetchApi
};