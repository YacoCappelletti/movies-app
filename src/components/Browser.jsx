import { useState, useContext, useEffect } from "react";
import { FindResultContext } from "../context/FindResultContext";
import { SearchContext } from "../context/SearchContext";
export const Browser = () => {
  const [inputValue, setInputValue] = useState("");
  const { search, setSearch, setPage } = useContext(SearchContext);
  const { findResult } = useContext(FindResultContext);
  

  useEffect(() => {}, [findResult]);

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setSearch(inputValue);
    setPage(1);
  };

  return (
    <div className="container justify-content-center mt-5">
      <form
        onSubmit={onSubmit}
        className=" container-fluid d-flex justify-content-between"
      >
        <input
          type="text"
          placeholder="Find Movie"
          name="movie"
          className="form-control  "
          value={inputValue}
          onChange={onInputChange}
          onSubmit={onSubmit}
        />
        <button type="submit" className="btn btn-dark ms-2">
          Search
        </button>
      </form>
      {findResult === false && search.length != 0 ? (
        <div className="alert alert-secondary mt-1 animate__animated animate__fadeInDown">
          Results not found
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
