export const getSeries = async (serie, page = 1) => {
  const url = `http://www.omdbapi.com/?apikey=313926ee&s=${serie}&type=series&page=${page}`;

  const resp = await fetch(url);
  const { Search } = await resp.json();

  try {
    const series = Search.map((serie) => ({
      id: serie.imdbID,
      title: serie.Title,
      year: serie.Year,
      img: serie.Poster,
    }));

    return series;
  } catch (error) {
    return false;
  }
};
