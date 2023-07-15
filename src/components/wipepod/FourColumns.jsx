import React from 'react'

export const FourColumns = () => {
  return (
    
    <div className="row" id='row-max'>
      <div className="col-md-3" id='column'>
      <h3>UNIT SIZE</h3>
      <hr></hr>
      <p>200x200x200mm</p>
      </div>

      <div className="col-md-3" id='column'>
      <h3>WEIGHT</h3>
      <hr></hr>
      <p>1kg</p>
      </div>

      <div className="col-md-3" id='column'>
      <h3>CAPACITY</h3>
      <hr></hr>
      <p>500 Wipes</p>
      </div>

      <div className="col-md-3" id='column'>
      <h3>COLOURS</h3>
      <hr></hr>
      <p>White / Black / Silver</p>
      </div>
      
      
      
    </div>
  )
}
