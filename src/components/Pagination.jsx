import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const Pagination = () => {
  const { page, setPage } = useContext(SearchContext);

  const onClick = (actualPage) => {
    if (actualPage == "previous" && page == 1) {
      setPage(1);
    } else if (actualPage == "previous") {
      setPage(page - 1);
    } else if (actualPage == "next") {
      setPage(page + 1);
    } else if (actualPage != "previous") {
      setPage(actualPage);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center mt-3">
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link text-dark"
                onClick={() => onClick("previous")}
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <p
                className={`page-link ${
                  page == 1 ? "text-warning" : "text-dark"
                }`}
                onClick={() => onClick(1)}
              >
                1
              </p>
            </li>
            <li className="page-item">
              <p
                className={`page-link ${
                  page == 2 ? "text-warning" : "text-dark"
                }`}
                href="#"
                onClick={() => onClick(2)}
              >
                2
              </p>
            </li>
            <li className="page-item">
              <p
                className={`page-link ${
                  page == 3 ? "text-warning" : "text-dark"
                }`}
                href="#"
                onClick={() => onClick(3)}
              >
                3
              </p>
            </li>
            <li className="page-item">
              <a
                className="page-link text-dark"
                onClick={() => onClick("next")}
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
