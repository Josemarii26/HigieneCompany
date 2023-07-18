import React from 'react'
import contact from './ABOUT (1).jpg';

import { useTranslation } from 'react-i18next';

export const TextoCentradoContact = () => {

  const [t, i18n] = useTranslation("global");

  return (

    <div className="col-md-12">
      <div className="image-container" id='wapper2'>
        <img src={contact} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h4 className='titulo2' data-aos="fade-left"><strong> CONTACT US <hr id='hr-black'></hr></strong></h4>
        <p id='menor'>Have a question? Get in touch with us. We’re always happy to have a chat.</p>
          <a href='#widepod'><button type="button" class="botoncito" href="#widepod">Discover + <span></span><span></span><span></span><span></span></button></a>

        </div>

      </div>
    </div>
  )
}
