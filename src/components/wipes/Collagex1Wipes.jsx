import React, { useEffect } from 'react'
import wipes2 from './Wipes2.jpg';
import img1 from './img1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Collagex1Wipes = () => {

    useEffect(()=> {
        Aos.init();
        },[])
        
    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='negro' >
                <div className="col-md-1"></div>
                <div className="col-md-4" id="text-pls-2">
                    <br></br>
                    <h1 data-aos="fade-left"><strong>Liquidate SS4/SS5 <br></br> Multi-Purpose Hand & <br></br>Surface Wipes</strong></h1>
                    <hr id='hr-green'></hr>
                    <p>Our brand-new SS4/SS5 antiviral hand and surface wet wipe range contain Rewocid WK30; an active ingredient provided by Evonik, who have by proven efficacy data which verifies that, with an active concentration of 0.50% and a contact time of 5-15 minutes, the new strain of COVID-19 is inactivated.</p>

                       <p> Our SS4/SS5 antibacterial wipes are the perfect solution for exceptional hygiene on-the-go, with our 100-wipe packet option, and in facilities, with our large capacity bucket options. The bucket features a simple pull tab, enabling easy access to the wipes for fast and efficient cleaning; making this option ideal for offices, schools, gymnasiums, retail and food preparation areas. Moreover, our SS4/SS5 Alcohol Wipes are medical grade and, thus, are currently used in care homes, dental practices and healthcare facilities.</p>

                        <p>To enhance the life and effectiveness of our alcohol wipes they are first placed into a biodegradable or recyclable bag and then placed into the bucket. We suggest they remain in the bag and the lid on the bucket closed after use.
                    </p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6" id='wapper3' >
                    <img src={wipes2} className="img-fluid" alt="logo" />
                </div>

            </div>

        </div>
    )
}