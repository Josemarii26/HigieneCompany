import React from 'react'
import email from './correo-electronico-vacio.png';
import phone from './telefono-inteligente (1).png';


export const Where = () => {
    return (
        <div className="row" id='row-max'>
            <h1><strong>Where to buy</strong></h1>
            
            <div className="col-md-2"></div>
            <div className="col-md-3" id='column'>
            

                <img src={email} className="img-fluid" id='image' alt="logo" />

                <h3>EMAIL US</h3>
                <br></br>
                <hr id='hr-green'></hr>
                <p>distribucionesruizmillan@gmail.com</p>
                <button type="button" class="botoncito2">Email <span></span><span></span><span></span><span></span></button>
                
            </div>
            <div className="col-md-2"></div>
            

            <div className="col-md-3" id='column'>
                <img src={phone} className="img-fluid" id='image2' alt="logo" />
                
                <h3>CALL US</h3>
                <br></br>
                <hr id='hr-green'></hr>
                <p>685 09 18 30</p>
                <button type="button" class="botoncito2">Call <span></span><span></span><span></span><span></span></button>

            </div>
            <div className="col-md-2"></div>




        </div>
    )
}
