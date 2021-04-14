
const renderBeerCard = (data) => {

    const {
        image_url,
        name,
        tagline,
        description,
        abv,
        ibu,
    } = data;
    const food_pairing = data['food_pairing']; //Map ()
    const htmlCard = `    
    <div class="card-beer">
        <img src="${image_url}"
             alt="beer illustration of${name}">
        <h3 class="card-beer__title">${name}</h3>
        <div class="card-beer__stats">
            <span>ABV:${abv}%</span>
            <span>IBU:${ibu}</span>
        </div>
        <article class="card__description">
                <h4>${name}</h4>
                <p class="card__tagline">${tagline}</p>
                <p class="card__description-text">${description}</p>
                <p class="card__food_pairing">
                    Pair with: ${food_pairing}
                </p>
        </article>
    </div>`;

    return htmlCard;
};

export {
    renderBeerCard
};