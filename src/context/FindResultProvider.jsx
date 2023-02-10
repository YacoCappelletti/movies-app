import { useState } from "react";
import { FindResultContext } from "./FindResultContext";

export const FindResultProvider = ({ children }) => {
  const [findResult, setFindResult] = useState(true);

  return (
    <FindResultContext.Provider value={{ findResult, setFindResult }}>
      {children}
    </FindResultContext.Provider>
  );
};
