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
    </>
  );
}

export default App;
