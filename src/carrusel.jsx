import React from "react";

const Carousel = function Carousel() {
  return (
    <div className="fullscreen-image my-0 fixed-top">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://cdn.fansshare.com/pictures/wallpapers1600x900/wallpapers-fondo-de-pantalla-hd-alta-calidad-plus-dizorb-hd-wallpaper-33030152.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./img1.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
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
    