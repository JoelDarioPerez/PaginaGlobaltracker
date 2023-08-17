const Aplicaciones = () => {
  return (
    <div className="container-fluid bg-success">
      <div className="row my-5">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-5">
          <h2>Tené tus unidades en la palma de tu mano</h2>
          <p>
            Con nuestra aplicación disponible para iOs y Android podés
            visualizar tus unidades desde cualquier teléfono móvil las 24 hs del
            día.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <img
            src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-iphone2.png"
            alt="Imagen"
            style={{ margin: "20px", width: "30%", height: "75%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Aplicaciones;
