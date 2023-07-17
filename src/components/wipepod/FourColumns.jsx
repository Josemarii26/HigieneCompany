import React from 'react'
import palette from './palette.png';
import capacity from './capacity.png';
import weight from './weight.png';
import size from './size.png';


export const FourColumns = () => {
  return (
    
    <div className="row" id='row-max'>
      
      <div className="col-md-2"></div>
      <div className="col-md-2" id='column'>
      <img src={size} className="img-fluid" alt="logo"  id='image5'/>
      <br></br>
      <br></br>
      <h3>UNIT SIZE</h3>
      <hr id='hr-green'></hr>

      <p id='text-pls-5'>200x200x200mm</p>
      </div>

      <div className="col-md-2" id='column'>
      <img src={weight} className="img-fluid" alt="logo" id='image5'  />
      <br></br>
      <br></br>
      <h3>WEIGHT</h3>
      <hr id='hr-green'></hr>

      <p id='text-pls-5'>1kg</p>
      </div>

      <div className="col-md-2" id='column'>
      <img src={capacity} className="img-fluid" alt="logo" id='image4' />
      <br></br>
      <br></br>
      <h3>CAPACITY</h3>
      <hr id='hr-green'></hr>

      <p id='text-pls-5'>500 Wipes</p>
      </div>

      <div className="col-md-2" id='column'>
      <img src={palette} className="img-fluid" alt="logo" id='image5' />
      <br></br>
      <br></br>
      <h3>COLOURS</h3>
      <hr id='hr-green'></hr>
      <p id='text-pls-5'>White / Black / Silver</p>
      </div>
      <div className="col-md-2"></div>

      
      
      
    </div>
  )
}
