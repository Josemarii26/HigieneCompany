import React from 'react'
import widepod from './widepod0.jpg';

import { useTranslation } from 'react-i18next';

export const TextoCentrado = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="col-md-12">
      <div className="image-container" id='wapper2'>
        <img src={widepod} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h1 className='titulo2' ><strong> Wipepod® <hr id='hr-black'></hr></strong></h1>
        <h4>The Hygiene Company is the home of the Wipepod®: the award-winning, <br></br>low-cost antibacterial wet wipes dispenser.</h4>
          <button type="button" class="botoncito">Discover More <span></span><span></span><span></span><span></span></button>

        </div>

      </div>
    </div>





  )
}
