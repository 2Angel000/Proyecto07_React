import React, { useContext } from "react";
import { Contexto } from "./contexto/Contexto";

export default function Pagina2() {
  const { color } = useContext(Contexto);
  return (
    <div className="hijo" style={{ background: color }}>
      Pagina2
      <h1>{color}</h1>
    </div>
  );
}
