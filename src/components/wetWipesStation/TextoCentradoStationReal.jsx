import React from 'react'
import station from './StationReal.jpg';

import { useTranslation } from 'react-i18next';

export const TextoCentradoStationReal = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="col-md-12">
      <div className="image-container" id='wapper2'>
        <img src={station} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h4 className='titulo2' ><strong> THE WET WIPES STATION <hr id='hr-black'></hr></strong></h4>
        <h4 id='menor'>With an antibacterial wet wipe unit and integrated bin, the freestanding Wet Wipes Station is the<br></br> epitome of fast and effective hygiene solutions.</h4>
          <a href='#widepod'><button type="button" class="botoncito" href="#widepod">Discover + <span></span><span></span><span></span><span></span></button></a>

        </div>

      </div>
    </div>





  )
}
