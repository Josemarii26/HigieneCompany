import React, { useEffect } from 'react'
import widepod from './widepod.jpg';
import wipes5 from './Wipes5.jpg';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const TextoCentradoWipes = () => {

  const [t, i18n] = useTranslation("global");

  useEffect(()=> {
    Aos.init();
    },[])

  return (
    
    <div className="col-md-12">
      <div className="image-container" id='wapper2'>
        <img src={wipes5} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h4 className='titulo2' data-aos="fade-left"><strong> ANTIBACTERIAL<br></br> WIPES <hr id='hr-black'></hr></strong></h4>
        <p id='menor'>Dedicated to providing a solution for every need, our array <br></br>
        of disinfectant wipes, designed for both hands and surfaces,
         is fantastically diverse; <br></br>with alcohol-free wipes, alcohol wipes, 
         recyclable<br></br> wipes and biodegradable wipes all available.</p>
          <button type="button" class="botoncito">Discover More <span></span><span></span><span></span><span></span></button>

        </div>

      </div>
    </div>
    

     
  )
}
