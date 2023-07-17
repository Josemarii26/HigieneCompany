import React from 'react'
import palette from './palette.png';
import capacity from './capacity.png';
import weight from './weight.png';
import size from './size.png';


export const FourColumnsStainless = () => {
  return (
    
    <div className="row" id='row-max'>
      
      <div className="col-md-2"></div>
      <div className="col-md-2" id='column'>
      <img src={size} className="img-fluid" alt="logo"  id='image5'/>
      <br></br>
      <br></br>
      <h3>UNIT SIZE</h3>
      <hr id='hr-green'></hr>

      <p id='text-pls-5'>Large: 300Lx253.5WX250D</p>
      <p id='text-pls-5'>Medium: 273.8Lx124WX125.4D</p>
      </div>

      <div className="col-md-2" id='column'>
      <img src={weight} className="img-fluid" alt="logo" id='image5'  />
      <br></br>
      <br></br>
      <h3>WEIGHT</h3>
      <hr id='hr-green'></hr>

      <p id='text-pls-5'>Large: 3.5KG</p>
      <p id='text-pls-5'>Medium: 2KG</p>
      </div>

      <div className="col-md-2" id='column'>
      <img src={capacity} className="img-fluid" alt="logo" id='image4' />
      <br></br>
      <br></br>
      <h3>CAPACITY</h3>
      <hr id='hr-green'></hr>

      <p id='text-pls-5'>Large: 600-1000</p>
      <p id='text-pls-5'>Medium: 200-500</p>
      </div>

      <div className="col-md-2" id='column'>
      <img src={palette} className="img-fluid" alt="logo" id='image5' />
      <br></br>
      <br></br>
      <h3>COLOURS</h3>
      <hr id='hr-green'></hr>
      <p id='text-pls-5'><strong>Brushed</strong> Silver</p>
      <p id='text-pls-5'><strong>Matt</strong> Black</p>
      </div>
      <div className="col-md-2"></div>

      
      
      
    </div>
  )
}
