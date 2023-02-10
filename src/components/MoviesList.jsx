import { useContext, useEffect } from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { Movie } from "./Movie";
import { SearchContext } from "../context/SearchContext";
import { FindResultContext } from "../context/FindResultContext";

export const MoviesList = () => {
  const { search, page } = useContext(SearchContext);
  const { setFindResult } = useContext(FindResultContext);
  const { movies, getSearchData } = useFetchMovies(search);

  useEffect(() => {
    getSearchData(search);
    
  }, [search]);

  useEffect(() => {
    
    getSearchData(search, page);
  }, [page]);

  useEffect(() => {
    if (!movies) {
      setFindResult(false);
    } else if (movies) {
      setFindResult(true);
    }
  }, [movies]);

  return (
    <>
      {movies ? (
        <div className="container-fluid row mt-5  justify-content-center ">
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
