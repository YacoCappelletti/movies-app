import { getSeries } from "../helpers/getSeries";
import { useState, useEffect } from "react";
export const useFetchSeries = (search, page = 1) => {
  const [series, setSeries] = useState([]);

  const getSearchData = async (search = "", page = 1) => {
    const data = await getSeries(search, page);
    setSeries(data);
  };

  useEffect(() => {
    getSearchData();
  }, []);

  return {
    series,
    getSearchData,
  };
};
