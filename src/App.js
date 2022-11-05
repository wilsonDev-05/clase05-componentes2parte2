import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [conteo, setConteo] = useState(0);
  const [fecha, setFecha] = useState(Date()); // iniciamos Date por defecto.
  // funcion:
  function click() {
    setConteo(conteo + 1);
    setFecha(Date());
  }

  return (
    <div>
      <div>
        <div>{conteo}</div>
        <div>{fecha}</div>
        <button onClick={click}>click</button>
      </div>
    </div>
  );
}
