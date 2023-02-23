export const getMovies = async (movie, page = 1) => {
  const url = `http://www.omdbapi.com/?apikey=313926ee&s=${movie}&type=movie&page=${page}`;

  const resp = await fetch(url, {
    referrerPolicy: "unsafe-url",
  });
  const { Search } = await resp.json();

  try {
    const movies = Search.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster,
    }));

    return movies;
  } catch (error) {
    return false;
  }
};
