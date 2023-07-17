import React from 'react'
import { Link } from 'react-router-dom';


export const TextoBlanco = () => {
  return (
    <div className="row" id='widepod'>
      <div className="col-md-1"></div>
      <div className="col-md-10" id='text-pls-5'>
        <h1><strong>Innovative Hygiene Solutions</strong> <br/> <strong id='txt-verde'>Since 1992</strong></h1>
        <hr id='hr-green'></hr>
        <p>Founded in 1992, we, at The Hygiene Company, have continued to create original products at the cutting-edge of hygiene solutions for nearly 30 years.</p>

          <p>As the UK’s leading supplier of antibacterial wipes, sanitisers and dispensers, we guarantee that our extensive range of smart and efficient products will improve cleaning procedures and inspire good hygiene practice in every setting.</p>


          <p>With a mission to make the industry’s best hygiene products available to those who need them, we have helped hundreds of clients to maintain healthy environments for their staff and customers through premium quality products at highly competitive prices. Moreover, we are committed to understanding the collective needs and wants of all our clients so as to continue developing pioneering products that are tailored to you.</p>
          <Link as={Link} to="/about-us"><button type="button" class="botoncito2" >Discover + <span></span><span></span><span></span><span></span></button></Link>

      </div>
      <div className="col-md-1">
      </div>

      

    </div>
  
  )
}
