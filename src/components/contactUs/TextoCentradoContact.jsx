import React from 'react'
import contact from './ABOUT (1).jpg';

import { useTranslation } from 'react-i18next';

export const TextoCentradoContact = () => {

  const [t, i18n] = useTranslation("global");

  return (

    <div className="col-md-12">
      <div className="image-container" id='wapper2'>
        <div className="image-wrapperX">
          <img src={contact} className="img-fluid" alt="logo" />
          <div className="image-textX">Texto en la imagen Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt, ea totam voluptatem esse voluptatibus beatae eaque cumque perspiciatis consequatur possimus ut est repudiandae aliquid adipisci exercitationem dicta hic voluptatum.</div>
        </div>

      </div>
    </div>
  )
}
