const Carousel = () => {
  return (
    <div className="my-0 d-flex-container ">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="img-fluid"
              src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-volvo-benefits-crawler-excavator-ec350d-t2-customer-support-agreements-2324x1200-1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid"
              src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-Agriculture-Stock-Photos-and-Commercial-Photographer-by-Todd-Klassy-Photography-Agriculture-Photos.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid"
              src="https://p4.wallpaperbetter.com/wallpaper/603/330/349/high-resolution-images-of-nature-3840x2160-wallpaper-preview.jpg"
              alt="Third slide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
