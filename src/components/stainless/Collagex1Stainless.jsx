import React, { useEffect } from 'react'
import stainless2 from './Stainless2.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Collagex1Stainless = () => {

    useEffect(()=> {
        Aos.init();
        },[])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='verde'>
                <div className="col-md-6" id='wapper' >
                    <img src={stainless2} className="img-fluid" alt="logo"/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4" id="text-pls-3">
                    <br></br>
                    <h1 data-aos="fade-left"><strong>FREESTANDING STAINLESS STEEL WET WIPES DISPENSERS</strong></h1>
                    <hr id='hr-black'></hr>
                    <br></br>
                    <p>Our Freestanding Stainless Steel Wet Wipes Dispensers offer a high-end yet cost-effective hygiene solution. Featuring a built-in antibacterial hand sanitiser dispenser and galvanised steel waste bin, this deluxe dispenser goes above and beyond its impressively large capacity for wet wipes; enabling the sanitisation of both hands and surfaces, as well as a means by which to dispose of used wet wipes, all in one location.</p>
                    <p>The freestanding nature of this dispenser is an ideal solution for many facilities, particularly large spaces and entranceways, as they can be placed in the most prominent locations so as to be visible and accessible to all staff and customers, thus ensuring they feel safe within your facilities.</p>
                </div>
                <div className="col-md-1"></div>

            </div>

        </div>
    )
}