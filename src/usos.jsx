const Usos = () => {
  return (
    <div>
      <div className="container d-flex flex-column align-items-center">
        <h2>Usos</h2>
        <h3>
          Nuestros dispositivos pueden ser utilizados en cualquier tipo de
          vehiculo.
        </h3>
        <div className="d-flex justify-content-between">
          <div className="text-center">
            <img
              src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-1597155844435coronavirus-taxis_031-1.jpg"
              alt="Transporte Público"
              width={200}
              height={200}
              className="rounded-circle mx-5"
            />
            <h3>Transporte Público</h3>
          </div>
          <div className="text-center">
            <img
              src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-FMX-in-quarry-with-CE-front-loader_950f2a499826bf35a158888fa10b0364-1-300x300.jpg"
              alt="Construcción"
              width={200}
              height={200}
              className="rounded-circle mx-5"
            />
            <h3>Construcción</h3>
          </div>
          <div className="text-center">
            <img
              src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-camionmercedes.jpg"
              alt="Transporte de Cargas"
              width={200}
              height={200}
              className="rounded-circle mx-5"
            />
            <h3>Transporte de Cargas</h3>
          </div>
          <div className="text-center">
            <img
              src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-cropped-Products-Services-Information.jpg"
              alt="Agroindustria"
              width={200}
              height={200}
              className="rounded-circle mx-5"
            />
            <h3>Agroindustria</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usos;
