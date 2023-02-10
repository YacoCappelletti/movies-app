export const Movie = ({ title, year, img }) => {
  return (
    <>
      <div className="app-card  shadow-lg animate__animated animate__fadeInUp">
        <a href={`https://www.google.com/search?q=${title}`} target="_blanck">
          <img src={img} alt="image not available" />

          <div className="description">
            <h5 className="fs-5">{title}</h5>
            <h6>Year:{year}</h6>
          </div>
        </a>
      </div>
    </>
  );
};
