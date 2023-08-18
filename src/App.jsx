import "./App.css";
import Navbar from "./navbar";
import Carousel from "./carrusel";
import Franja from "./seccionTecnologia";
import Optimiza from "./optimiza";
import Usos from "./usos";
import Informacion from "./informacion";
import Aplicaciones from "./aplicaciones";
import Clientes from "./clientes";
import Contacto from "./contacto";

function App() {
  return (
    <>
      <Navbar /> {/* Movemos el Navbar fuera del contenedor d-flex */}
      <Carousel />
      <Franja />
      <Optimiza />
      <Usos />
      <Informacion />
      <Aplicaciones />
      <Clientes />
      <Contacto />
    </>
  );
}

export default App;
