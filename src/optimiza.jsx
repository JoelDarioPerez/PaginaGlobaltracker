const Optimiza = () => {
  return (
    <div>
      <div
        className="container-fluid"
        style={{ background: "rgb(230,230,230)" }}
      >
        <div className="row my-5">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-5">
            {" "}
            {/* Alineación vertical y horizontal */}
            <h3>COMO PODEMOS AYUDARTE?</h3>
            <h2>MEJORÁ EL RENDIMIENTO DE TU FLOTA</h2>
            <p>
              Con la ayuda de nuestro servicio obtené el mayor rendimiento
              posible de tus unidades, mejorá tus rutas, tu consumo y disminuí
              el tiempo ocioso en tus vehiculos.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <img
              src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-1-3.jpg"
              alt="Imagen"
              style={{ margin: "20px", width: "75%", height: "75%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optimiza;
