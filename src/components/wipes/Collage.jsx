import React, { useEffect } from 'react'

import wipes4 from './Wipes4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';




export const Collage = () => {

    useEffect(()=> {
        Aos.init();
        },[])
        
    return (
        <div className="container-fluid" id='collage'>
            
            <div className="row" id='verde'>
                <div className="col-md-6 order-3 order-md-2 " id='wapper3'>
                    <img src={wipes4} className="img-fluid" alt="logo" id='image' />
                </div>
                <div className="col-md-1 order-2 oirder-md-2"></div>
                <div className="col-md-4 order-3 order-md-2" id='text-pls-3' >
                    <br></br>
                    
                    <h1 data-aos="fade-right"><strong>Biodegradable Wipes</strong></h1>
                    <hr id='hr-black-S'></hr>
                    <p>Wet wipes are used very frequently in almost every household, venue and workplace as baby wipes, nursing wipes, kitchen wipes, grime wipes, gym wipes, industrial wipes and many more. In fact, it is believed that in the UK alone, we dispose of 11,000,000,000 wet wipes every year.</p>

                    <p>The primary issue is that the majority of cleaning wipes contain a non-biodegradable plastic and, as a result: they end up in landfill sites where they take hundreds of years to decompose; they get incinerated, which contributes to carbon emissions; or they get flushed down the toilet which causes them to clog up sewers or harm marine life. Regardless of how they are disposed, it is evident that such wet wipes are devastating for the environment.</p>

                    <p>The Hygiene Company has developed a range of biodegradable wipes to combat this issue; these wipes are a fantastic eco-friendly solution as they naturally decompose with time and, therefore, not only are they significantly less harmful to the environment, but they are also able to clean surfaces and hands as effectively as regular disinfectant wipes.
                    </p>
                </div>
                <div className="col-md-1 order-3 oirder-md-2"></div>

                

            </div>
        </div>
    )
}
