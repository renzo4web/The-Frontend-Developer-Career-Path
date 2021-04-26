const grid = document.querySelector('.grid');

const fetchApi = async () => {
    try {
        const res = await fetch('./pokedex.json');
        const pokemons = await (res.json());
        return pokemons.slice(0, 99);
    } catch (e) {
        console.warn(e);
    }
};

const loadPokemon = (pokemon) => {

    const {
        id,
        name: {english, japanese, french, chinese},
        type,
    } = pokemon;

    const {
        Attack,
        Defense,
        HP,
        Speed
    } = pokemon.base;

    const html = `
    <div class="pokemon">
                <p class="num-pokemon">${id}</p>
                <p class="pokemon-name">${english}</p>
                <p class="type">${[...type].join(' ')}</p>
                <p class="stats">HP:${HP}</p>
                <p class="stats">Attack:${Attack}</p>
                <p class="stats">Defence:${Defense}</p>
                <p class="stats">Speed:${Speed}</p>
                <p class="japanese">${japanese}</p>
                <p class="japanese">${chinese}</p>
                <p class="japanese">${french}</p>
        </div>
    `;

    grid.insertAdjacentHTML('beforeend', html);

};


const loadPokemons = async () => {

    try {
        const pokedex = await fetchApi();
        pokedex.forEach(loadPokemon);
    } catch (e) {
        console.warn(e);
    }


};

loadPokemons();