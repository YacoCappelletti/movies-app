import { SearchContext } from "./SearchContext";
import { useState } from "react";
export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("Avengers");
  const [page, setPage] = useState(1)
 
  return (
    <SearchContext.Provider value={ {search, setSearch, page, setPage} }>
      {children}
    </SearchContext.Provider>
  );
};
