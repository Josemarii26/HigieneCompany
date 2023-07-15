import React, { useEffect } from 'react'
import about1 from './About1.jpg';
import about2 from './About2.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';



export const CollageAbout = () => {

    useEffect(()=> {
        Aos.init();
        },[])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='negro'>
                <div className="col-md-1"></div>
                <div className="col-md-4 order-1 order-md-0" id='text-pls-3' >
                    <br></br>
                    <br></br>

                    <h1 data-aos="fade-left"><strong>ENSURING YOUR PROTECTION & WELLBEING</strong></h1>
                    <hr id='hr-green'></hr>
                    <p >At The Hygiene Company, we are increasingly aware of current global issues and, therefore, are constantly striving to find new solutions for our ever-changing world. In light of the coronavirus, while many businesses have suffered shortages, we have ensured that our clients are never without sufficient hygiene supplies. Furthermore, we have developed new products that are effective against the new strain of COVID-19, such as our SS4/SS5 antiviral hand and surface wet wipe range.</p>
                    <br></br>
                    <p>As well as ensuring the protection and wellbeing of people, we pride ourselves on simultaneously protecting the world around us through our range of environmentally friendly products, such as biodegradable wipes and recyclable wipes, and through the implementation of our Environmental Management Policy Statement.</p>


                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6 order-0 order-md-1" id='wapper2' >
                    <img src={about1} className="img-fluid" alt="logo" />
                </div>
            </div>

            <div className="row" id='verde'>

                <div className="col-md-6 order-3 order-md-2 " id='wapper3'>
                    <img src={about2} className="img-fluid" alt="logo"  />
                </div>
                <div className="col-md-1 order-2 oirder-md-2"></div>
                <div className="col-md-4 order-3 order-md-2" id='text-pls-3' >
                    <br></br>
                    <br></br>
                    
                    

                    <h1 data-aos="fade-right"><strong>A BUSINESS THAT THRIVES ON INNOVATION</strong></h1>
                    <hr id='hr-black'></hr>
                    <p>As a business that thrives on innovation, we are excited for what the future holds for The Hygiene Company and our clients as we inevitably face new challenges.</p>
                    <br></br>
                    <p>Constant research and laboratory testing, alongside the invaluable feedback from our clients, prepare us for present and forthcoming hygiene concerns by helping us to improve the effectivity of our current products and to invent new, original products.</p>


                </div>
                <div className="col-md-1 order-3 order-md-2"></div>



            </div>
        </div>
    )
}
