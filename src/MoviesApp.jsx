import { Browser, MoviesList, SeriesList, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";

import { Pagination } from "./components/Pagination";

export const MoviesApp = () => {
  return (
    <>
      <Navbar />
      <Browser />
      <Routes>
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/series" element={<SeriesList />} />
        <Route path="/*" element={<MoviesList />} />
      </Routes>

      <Pagination />
    </>
  );
};
