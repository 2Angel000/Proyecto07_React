import { useState } from "react";
import Contexto from "./Context";

const valores = [
  {
    titulo: "Aprenda React intensivamente con una profesora nativa",
    texto: "2 Semanas. Una profesora sólo para ti (12/día)",
    boton1: "Profesora",
    foto: "marta.PNG",
    nombre: "Marta Ríos",
    boton2: "Lugar",
    direccion: "48 St Laurent Boulevard, Montreal, Canadá",
  },
  {
    titulo: "Learn React intensively with a native teacher",
    texto: "2 Weeks. A teacher just for you (12/day)",
    boton1: "Teacher",
    foto: "grace.PNG",
    nombre: "Grace Smith",
    boton2: "Place",
    direccion: "48 St Laurent Boulevard, Montreal, Canadá",
  },
  {
    titulo: "Apprenez à réagir intensivement avec un professeur natif",
    texto: "2 semaines. Un professeur rien que pour vous (12/jour)",
    boton1: "Professeur",
    foto: "aimee.PNG",
    nombre: "Aimee Szchitez",
    boton2: "Lieu",
    direccion: "48 St Laurent Boulevard, Montreal, Canadá",
  },{
    idioma: 2
  }
]

const Provider = function ({ children }) {
  const [alumno, setAlumno] = useState(valores);

  return (
    <Contexto.Provider value={{ alumno, setAlumno }}>
      {children}
    </Contexto.Provider>
  );
};

export default Provider;
