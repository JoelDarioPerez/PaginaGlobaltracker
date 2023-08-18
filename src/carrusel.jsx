const Carousel = () => {
  return (
    <div className="w-100 container-fluid" style={{ width: "100%" }}>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="img-fluid w-100" // Agregamos la clase w-100 para ocupar el 100% del ancho
              src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-volvo-benefits-crawler-excavator-ec350d-t2-customer-support-agreements-2324x1200-1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid" // Agregamos la clase w-100 para ocupar el 100% del ancho
              src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-Agriculture-Stock-Photos-and-Commercial-Photographer-by-Todd-Klassy-Photography-Agriculture-Photos.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid" // Agregamos la clase w-100 para ocupar el 100% del ancho
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
