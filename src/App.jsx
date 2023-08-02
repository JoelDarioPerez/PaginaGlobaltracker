import { useState } from "react";

import "./App.css";
import Navbar from "./navbar";
import Carousel from "./carrusel";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Carousel /> <Navbar />
    </>
  );
}

export default App;
