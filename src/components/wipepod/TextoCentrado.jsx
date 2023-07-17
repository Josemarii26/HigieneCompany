import React from 'react'
import widepod from './widepod0.jpg';

import { useTranslation } from 'react-i18next';

export const TextoCentrado = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="col-md-12">
      <div className="image-container" id='wapper2'>
        <img src={widepod} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h4 className='titulo2' ><strong> WIPEPOD® <hr id='hr-black'></hr></strong></h4>
        <h4 id='menor'>The Hygiene Company is the home of the Wipepod®: the award-winning, <br></br>low-cost antibacterial wet wipes dispenser.</h4>
          <a href='#widepod'><button type="button" class="botoncito" href="#widepod">Discover + <span></span><span></span><span></span><span></span></button></a>

        </div>

      </div>
    </div>





  )
}