import React from 'react'
import station2 from './Station2.jpg';

export const TextoFotoStation = () => {
  return (
    <div className="row" id='widepod'>
      <div className="col-md-2">

      </div>
      <div className="col-md-4" id='text-pls-3'>
        <h1>THE EPITOME OF FAST AND EFFECTIVE HYGIENE SOLUTIONS.</h1>
        <hr id='hr-green-s'></hr>
        <p>With an antibacterial wet wipe unit and integrated bin, the freestanding Wet Wipes Station is the epitome of fast and effective hygiene solutions.</p>
        <p>The unit is specifically created by experts to be quick and easy-to-use, through its pull-wipe feature and hidden waste receptacle, while its weighted base ensures stability and its design makes the unit highly visible. Furthermore, our custom colour and branding options ensure that the unit looks at home in every facility. Upon combining these features, the Wet Wipes Station is perfect for maintaining excellent hand and surface hygiene practice in areas of high footfall, such as: supermarkets, play areas, gyms, service stations, offices, and health clubs.</p>
      </div>
      <div className="col-md-1">

      </div>

      <div className="col-md-3" id='wapper' >
        <img src={station2} className="img-fluid" id='station-img2' alt="logo" />
      </div>

    </div>
  )
}
