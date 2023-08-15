let Carousel = () => {
  return (
    <>
      <div>
        <div
          id="carouselExampleInterval"
          className="carousel slide container-fluid d-block w-100 h-100"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-Agriculture-Stock-Photos-and-Commercial-Photographer-by-Todd-Klassy-Photography-Agriculture-Photos.jpg"
                className="d-block w-100 d-block w-100 h-100"
                alt="luna lunera"
              ></img>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-Agriculture-Stock-Photos-and-Commercial-Photographer-by-Todd-Klassy-Photography-Agriculture-Photos.jpg"
                className="d-block w-100 d-block w-100 h-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-volvo-benefits-crawler-excavator-ec350d-t2-customer-support-agreements-2324x1200-1.jpg"
                className="d-block w-100 d-block w-100 h-100"
                alt="..."
              ></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Carousel;
