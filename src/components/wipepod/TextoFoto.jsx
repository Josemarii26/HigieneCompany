import React from 'react'
import img1 from './img1.jpg';

export const TextoFoto = () => {
  return (
    <div className="row" id='widepod'>
      <div className="col-md-1">

      </div>
      <div className="col-md-4" id='text-pls-3'>
        <h1>THE HOME OF AWARD WINNING WIDEPOD</h1>
        <p>The Hygiene Company is the home of the Wipepod®:
          the award-winning, low-cost antibacterial wet wipes dispenser.</p>
        <p>Since its launch, the Wipepod® has become a widely recognised
          product and an essential feature of many organisations, including:
          the NHS, Aviva, British Gas, National Grid, the deVere Group and
          Nuffield Health, as well as hundreds of gyms, healthcare centres,
          offices, kitchens, petrol stations, fast food outlets, and
          supermarkets across the UK.</p>
      </div>
      <div className="col-md-2">

      </div>

      <div className="col-md-4" id='wapper' >
        <img src={img1} className="img-fluid" alt="logo" />
      </div>

    </div>
  )
}
