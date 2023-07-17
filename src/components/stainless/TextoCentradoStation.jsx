import React from 'react'
import station from './Station.jpg';

import { useTranslation } from 'react-i18next';

export const TextoCentradoStation = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="col-md-12">
      <div className="image-container" id='wapper2'>
        <img src={station} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h4 className='titulo2' ><strong> STAINLESS STEEL WET WIPES DISPENSERS <hr id='hr-black'></hr></strong></h4>
        <h4 id='menor'>The Hygiene Company’s Stainless Steel Dispensers offer a sleek and effective<br></br> hygiene solution that will enhance your facilities and corporate image.</h4>
          <a href='#widepod'><button type="button" class="botoncito" href="#widepod">Discover + <span></span><span></span><span></span><span></span></button></a>

        </div>

      </div>
    </div>





  )
}
