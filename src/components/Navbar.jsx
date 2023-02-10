import { NavLink , Link} from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2" to="/">
     
              <div className="container d-flex align-items-cente ">
                <img
                  src="../../assets/video-camera.png"
                  className="icon me-2 pb-"
                ></img>
                <h1>MoviesApp</h1>
              </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarItems"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse justify-content-end" id="navbarItems">
            <div className="navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link fs-4  ${isActive ? "text-warning" : ""}`
                }
                to="/movies"
              >
                Movies
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link fs-4  ${isActive ? "text-warning" : ""}`
                }
                to="/series"
              >
                Series
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
