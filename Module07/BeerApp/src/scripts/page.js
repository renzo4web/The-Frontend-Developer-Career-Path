const renderBeerCard = (beer) => {

    const {
        image_url,
        name,
        tagline,
        description,
        abv,
        ibu,
    } = beer;
    const food_pairing = beer['food_pairing'];


    return `    
    <div class="card-beer">
        <img src="${image_url}"
             alt="beer illustration of${name}">
        <h3 class="card-beer__title">${name}</h3>
        <div class="card-beer__stats">
            <span>ABV:<strong>${abv}%</strong></span>
            <span>IBU:<strong>${ibu}%</strong></span>
        </div>
        <article class="card__description">
                <h4>${name}</h4>
                <p class="card__tagline">${tagline}</p>
                <p class="card__description-text">${description}</p>
                <p class="card__food_pairing">
                    Pair with: <em>${food_pairing}</em>
                </p>
        </article>
    </div>`;

};


const currentPageOnDOM = (page) => {
    const domPageElement = document.querySelector('.card--page p.card__title');
    domPageElement.textContent = `Page: ${page}`;
};

export {
    renderBeerCard,
    currentPageOnDOM
};