const Contacto = () => {
  const iconStyle = { fontSize: "2rem" };
  const textStyle = { fontSize: "1.25rem" };

  return (
    <div className="container-fluid " style={{ background: "#c1bfbf" }}>
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center py-4">
          <h3>COMUNICATE CON NOSOTROS</h3>
          <h2>Contactanos</h2>
          <p>
            <i className="fa-brands fa-whatsapp" style={iconStyle}></i>
            <p href="tel:2612510987" style={textStyle}>
              261-2510987
            </p>
          </p>
          <p>
            <i className="fa-solid fa-envelope" style={iconStyle}></i>{" "}
            <a href="mailto:contacto@globaltracker.com.ar" style={textStyle}>
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
