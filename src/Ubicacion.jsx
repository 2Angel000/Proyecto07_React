import React, {useContext} from 'react'
import Contexto from './contexto/Context'


export default function Ubicacion() {
  const {alumno} = useContext(Contexto);
  const idioma=alumno[3].idioma;

  return (
    <>
        <div className="ubicacion">
            <h1>{alumno[idioma].boton2}</h1>
            <div className="text">
                {alumno[idioma].direccion}
            </div>
        </div>
    </>
  )
}
