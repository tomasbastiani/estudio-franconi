import React from 'react';
import './fondo.css';
import Button from 'react-bootstrap/Button';


const Fondo = () => {
  return (
    <div className="contenedor">
      <h1>Estudio Franconi & Asoc.</h1>
      <Button variant="outline-secondary" href='#footer'>Contactanos</Button>
    </div>
  );
}

export default Fondo;