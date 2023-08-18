const Aplicaciones = () => {
  return (
    <div className="container-fluid">
      <div className="row p-5">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="http://globaltracker.com.ar/wp-content/uploads/2021/03/cropped-iphone2.png"
            alt="Imagen"
            style={{ margin: "20px", width: "20%" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h2>Tené tus unidades en la palma de tu mano</h2>
          <p>
            Con nuestra aplicación disponible para iOs y Android podés
            visualizar tus unidades desde cualquier teléfono móvil las 24 hs del
            día.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aplicaciones;
