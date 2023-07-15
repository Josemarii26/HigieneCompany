import React from 'react'
import about from './About.jpg';
import { useTranslation } from 'react-i18next';

export const TextoCentradoAbout = () => {

  const [t, i18n] = useTranslation("global");

  return (
    
    <div className="col-md-12">
      <div className="image-container" id='wapper2'>
        <img src={about} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h4 className='titulo2' ><strong> ABOUT US <hr id='hr-black'></hr></strong></h4>
          <p id='menor' >At The Hygiene Company, we thrive on innovation. Generating new ideas and solutions for the industry, in the form of cutting-edge and cost-effective products, is the foundation upon <br></br>which we continue to build our future.</p>
          <button type="button" class="botoncito">Discover More <span></span><span></span><span></span><span></span></button>

        </div>

      </div>
    </div>
  )
}
