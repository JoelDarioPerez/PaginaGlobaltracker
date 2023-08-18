import React from "react";

const Contacto = () => {
  return (
    <div className="container-fluid " style={{ background: "#c1bfbf" }}>
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center py-4">
          <h3>COMUNICATE CON NOSOTROS</h3>
          <h2>Contactanos</h2>
          <p>
            <a href="tel:2612510987">261-2510987</a>
          </p>
          <p>
            <a href="mailto:contacto@globaltracker.com.ar">
              contacto@globaltracker.com.ar
            </a>
          </p>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-end align-items-end p-0">
          <img
            src="https://www2.totalpremiumfinance.com/images/img_03.jpg"
            alt="Imagen"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
