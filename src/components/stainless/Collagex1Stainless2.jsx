import React, { useEffect } from 'react'
import stainless3 from './Stainless3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Collagex1Stainless2 = () => {

    useEffect(()=> {
        Aos.init();
        },[])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='verde'>
                <div className="col-md-6" id='wapper' >
                    <img src={stainless3} className="img-fluid" alt="logo"/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4" id="text-pls-3">
                    <br></br>
                    <h1 data-aos="fade-left"><strong>WET/DRY WALL-MOUNTED STAINLESS STEEL DISPENSERS</strong></h1>
                    <hr id='hr-black'></hr>
                    <br></br>
                    <p>Offering both wet wipes and dry wipe paper towels, the Wet/Dry Wall-Mounted Stainless Steel Dispenser is the perfect hygiene solution for every situation.</p>
                    <p>Whether in a commercial kitchen, at-home nursery or leisure centre, there is a need in all environments to clean, disinfect and dry surfaces, in order to maintain the health and safety of everyone who enters the facilities.</p>
                    <p>With its dual system, the Wet/Dry Wall-Mounted Stainless Steel Dispenser is both time- and cost- effective, for it provides staff and customers with the means to clean and dry surfaces and equipment in one location.</p>                
                </div>
                <div className="col-md-1"></div>

            </div>

        </div>
    )
}