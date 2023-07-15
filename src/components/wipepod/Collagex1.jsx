import React, { useEffect } from 'react'
import widepod from './Widepod.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Collagex1 = () => {

    useEffect(()=> {
        Aos.init();
        },[])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='verde'>
                <div className="col-md-6" id='wapper' >
                    <img src={widepod} className="img-fluid" alt="logo"/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4" id="text-pls-2">
                    <br></br>
                    <h1 data-aos="fade-left"><strong>THE ULTIMATE WET <br></br>WIPES DISPENSER</strong></h1>
                    <hr id='hr-black'></hr>
                    <p>The Wipepod® is produced in Polypropylene, using Steritouch Antimicrobial additives, which provide a great level of protection due to its ability to inhibit and kill viruses, germs and bacteria. Like many of our products, in addition to protecting our clients, the Wipepod® is also environmentally friendly; it can be easily replenished with refill pouches and bags that have a large capacity for antibacterial wet wipes, which discourages the disposal of used plastic into landfill sites.</p>

                       <p> Other features include a keyless locking system to ensure it remains secure, and the option to be customised by our clients, with regards to colours and branding, so that it looks at home in all environments.</p>

                        <p>The Wipepod® is the ultimate wet wipes dispenser to improve customer confidence, reduce waste, and save both time and money.
                    </p>
                </div>
                <div className="col-md-1"></div>

            </div>

        </div>
    )
}