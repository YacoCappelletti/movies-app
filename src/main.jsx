import React from "react";
import ReactDOM from "react-dom/client";
import { MoviesApp } from "./MoviesApp";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./context/SearchProvider";
import "animate.css";
import "./styles.css";
import { FindResultProvider } from "./context/FindResultProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <FindResultProvider>
          <MoviesApp />
        </FindResultProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode> 
);
