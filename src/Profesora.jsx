import React, { useContext } from "react";
import Contexto from "./contexto/Context";

export default function Profesora() {
  const { alumno } = useContext(Contexto);
  const idioma = alumno[3].idioma;
  const imagen = `./images/${alumno[idioma].foto}`;
  return (
    <>
      <h1>{alumno[idioma].boton1}</h1>
      <div className="profesora">
        <div className="foto">
          <img src={imagen} alt="" className="image" />
          <div className="nombre">{alumno[idioma].nombre}</div>
        </div>
        <div className="foto">
          <img src={imagen} alt="" className="image" />
          <div className="nombre">{alumno[idioma].nombre}</div>
        </div>
      </div>
    </>
  );
}
//npm i react-router-dom
