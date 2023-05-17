import React, {useContext} from 'react'
import { Contexto } from './contexto/Contexto';

export default function Colores() {
    const {setColor} = useContext(Contexto);
  return (
    <>

    <div className='colores'>
        <div className='color' onClick={()=>{setColor("#ff0000")}}></div>
        <div className='color' onClick={()=>{setColor("#8a2be2")}}></div>
        <div className='color' onClick={()=>{setColor("#008000")}}></div>
        <div className='color' onClick={()=>{setColor("#ff8c00")}}></div>
    </div>
    
    </>
  )
}
