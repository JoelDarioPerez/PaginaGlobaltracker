import "./App.css";
import Navbar from "./navbar";
import Carousel from "./carrusel";
import Franja from "./seccionTecnologia";
import Optimiza from "./optimiza";
import Usos from "./usos";
import Informacion from "./informacion";

function App() {
  return (
    <>
      <Navbar /> {/* Movemos el Navbar fuera del contenedor d-flex */}
      <Carousel />
      <Franja />
      <Optimiza />
      <Usos />
      <Informacion />
    </>
  );
}

export default App;
