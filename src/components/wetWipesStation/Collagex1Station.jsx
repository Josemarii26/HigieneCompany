import React, { useEffect } from 'react'
import station from './Station3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Collagex1Station = () => {

    useEffect(()=> {
        Aos.init();
        },[])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='verde'>
                <div className="col-md-6" id='wapper' >
                    <img src={station} className="img-fluid" alt="logo"/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4" id="text-pls-3">
                    <br></br>
                    <h1 data-aos="fade-left"><strong>KEY FEATURES</strong></h1>
                    <hr id='hr-black'></hr>
                    <br></br>
                    <ul>
                ✅ Unique patented design.
                </ul>
                <ul>
                ✅ Custom branding and colours available.
                </ul>
                <ul>
                ✅ Capacity of up to 1000 antibacterial wipes.
                </ul>
                <ul>
                ✅ Built-in waste receptacle.               </ul>
                <ul>
                ✅ Inner Bin Capacity: 25 litres.
                </ul>
                <ul>
                ✅ Dispenser size: 32cm (diameter) x 122cm.               </ul>
                <ul>
                ✅ Dispenser weight unpackaged: 11.75kg.
                </ul>
                <ul>
                ✅ Concrete base weight: 7.5kg.               </ul>
                <ul>
                ✅ Material: Polyethylene.
                </ul>
                </div>
                <div className="col-md-1"></div>

            </div>

        </div>
    )
}