import React from 'react'
import email from './correo-electronico-vacio.png';
import phone from './telefono-inteligente (1).png';


export const WhereContact = () => {
    return (
        <div className="row" id='row-max'>
            <h1>How to contact us</h1>
            <hr></hr>
            <div className="col-md-2" id='column'>
            </div>
            <div className="col-md-4" id='column'>
                <img src={email} className="img-fluid" id='image' alt="logo" />

                <h3>EMAIL US</h3>
                <br></br>
                <hr></hr>
                <p>info@thehygienecompany.com</p>
                <button type="button" class="botoncito2">Email <span></span><span></span><span></span><span></span></button>
                
            </div>


            <div className="col-md-4" id='column'>
                <img src={phone} className="img-fluid" id='image2' alt="logo" />
                
                <h3>CALL US</h3>
                <br></br>
                <hr></hr>
                <p>333 33 33 33</p>
                <button type="button" class="botoncito2">Call <span></span><span></span><span></span><span></span></button>

            </div>
            <div className="col-md-2" id='column'>
            </div>



        </div>
    )
}
