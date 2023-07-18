import React from 'react'

import wipes from './widepod0Mejor2.jpg';

import { useTranslation } from 'react-i18next';

export const TextoCentradoGym = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="col-md-12">
      <div className="image-container" id='wapper23'>
        <img src={wipes} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h4 className='titulo3' ><strong> GYM ZONE <hr id='hr-gold'></hr></strong></h4>
        <h4 id='menor2'>La nueva revolución llega al deporte y con ello a los gimnasios. <br></br>Limpieza y seguridad en lugar seguro es sinónimo de entrenamiento productivo y óptimo.</h4>
          <a href='#widepod3'><button type="button" class="botoncito" href="#widepod3">Discover + <span></span><span></span><span></span><span></span></button></a>

        </div>

      </div>
    </div>





  )
}
