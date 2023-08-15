<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
import Navbar from "./navbar";
import Carousel from "./carrusel";
import Franja from "./seccionTecnologia";

function App() {
  return (
    <>
      <Navbar /> {/* Movemos el Navbar fuera del contenedor d-flex */}
      <Carousel />
      <Franja />
=======
/* import { useState } from "react";
 */ import Navbar from "./navbar";
import "./App.css";
import Carousel from "./carousel";
import Funcionalidades from "./funcionalidades";
import Optimiza from "./optimiza";

function App() {
  /*   const [count, setCount] = useState(0);
   */
  return (
    <>
      <Navbar />
      <Carousel />
      <Funcionalidades />
      <Optimiza />
>>>>>>> f6a757a (Primer subida pagina web)
    </>
  );
}

export default App;
