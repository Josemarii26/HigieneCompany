import React from 'react'

import wipes from './Wipes.jpg';

export const TextoFotoWipes = () => {
  return (
    <div className="row" id='widepod'>
      <div className="col-md-1">

      </div>
      <div className="col-md-4" id='text-pls-2'>
        <h1><strong>THE LEADING UK SUPPLIER OF ANTIBACTERIAL WIPES FOR HAND AND SURFACE</strong></h1>
        <hr id='hr-green'></hr>
        <p>As the leading UK supplier of antibacterial wipes, we guarantee to provide you with exceptional wet wipes that meet your every need. Created with quality in mind, our wipes often last longer and work more efficiently than those of our competitor brands. What’s more, they’re entirely portable, meaning you can maintain great hygiene at all times with a product that you know you can rely on. Thus, whether you need wet wipes to clean gym equipment, wipe down your office desk or help with baby-changing duties, The Hygiene Company’s range of antibacterial wet wipes has you covered.</p>

          <p>Dedicated to providing a solution for every need, our array of disinfectant wipes, designed for both hands and surfaces, is fantastically diverse; with alcohol-free wipes, alcohol wipes, recyclable wipes and biodegradable wipes all available.</p>


          <p>In addition to protecting people through removing and killing 99.99% of germs and bacteria in seconds, our range of wet wipes also protect the planet as they are eco-friendly. Since the 1st of January 2020, all of our wipes, including the packaging, are now 100% recyclable, biodegradable or compostable.</p>

          <p>Therefore, with our environmentally friendly products, you, your staff and your customers can also take pride in the fact that you are helping to protect both one other and the world around you.</p>
      </div>
      <div className="col-md-2">

      </div>

      <div className="col-md-4" id='wapper' >
        <img src={wipes} className="img-fluid" alt="logo" />
      </div>

    </div>
  )
}
