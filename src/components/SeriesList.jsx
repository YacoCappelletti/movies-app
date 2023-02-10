import { useContext, useEffect } from "react";
import { useFetchSeries } from "../hooks/useFetchSeries";
import { Serie } from "./Serie";
import { SearchContext } from "../context/SearchContext";
import { FindResultContext } from "../context/FindResultContext";

export const SeriesList = () => {
  const { search, page } = useContext(SearchContext);
  const { setFindResult } = useContext(FindResultContext);
  const { series, getSearchData } = useFetchSeries(search);

  useEffect(() => {
    getSearchData(search);
  }, [search]);

  useEffect(() => {
    getSearchData(search, page);
  }, [page]);

  useEffect(() => {
    if (!series) {
      setFindResult(false);
    } else if (series) {
      setFindResult(true);
    }
  }, [series]);

  return (
    <>
      {series ? (
        <div className="container-fluid row mt-5  justify-content-center ">
          {series.map((serie) => (
            <Serie key={serie.id} {...serie} />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
