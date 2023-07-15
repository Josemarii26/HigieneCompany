import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

export const TextoEfecto = () => {

    useEffect(()=> {
    Aos.init();
    },[])

  return (
    <div className="prueba">
    <h2 data-aos="fade-left">Hola</h2>
    </div>
  )
}
