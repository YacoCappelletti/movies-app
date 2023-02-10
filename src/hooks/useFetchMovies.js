import { getMovies } from "../helpers/getMovies";
import { useState, useEffect } from "react";
export const useFetchMovies = (search, page = 1) => {
  const [movies, setMovies] = useState([]);

  const getSearchData = async (search = "", page = 1) => {
    const data = await getMovies(search, page);
    setMovies(data);
  };

  useEffect(() => {
    getSearchData();
  }, []);

  return {
    movies,
    getSearchData,
  };
};
