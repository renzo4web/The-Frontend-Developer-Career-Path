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




const init = async () => {
  try {
    const shows = await fetchApi();
    console.log('shows:', shows)
  } catch (error) {
    console.warn(erro);
  }
};

init()