import React, { useEffect } from 'react'
import menu1 from './Wipes3.jpg';
import menu2 from './menu2.jpg';
import menu3 from './menu3.jpg';
import menu4 from './menu4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';





export const CollageMenu = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='negro'>
                <div className="col-md-1"></div>
                <div className="col-md-4 order-1 order-md-0" id='text-pls-3' >
                    <br></br>
                    <br></br>

                    <h1 data-aos="fade-left"><strong>ANTIBACTERIAL HAND & SURFACE WET WIPES</strong></h1>
                    <hr id='hr-green'></hr>
                    <p >As the leading UK supplier of antibacterial wipes, we guarantee that we will provide you with exceptional wet wipes that meet your every need. Created with quality in mind, our wipes often last longer and work more efficiently than those of our competitor brands. What’s more, they’re entirely portable, meaning you can maintain great hygiene at all times with a product that you know you can rely on. Thus, whether you need wet wipes to clean gym equipment, wipe down your office desk or help with baby-changing duties, The Hygiene Company’s range of antibacterial wet wipes has you covered.
                    </p>

                    <Link as={Link} to="/wipes"><button type="button" class="botoncito2" >Discover + <span></span><span></span><span></span><span></span></button></Link>

                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6 order-0 order-md-1" id='wapper2' >
                    <img src={menu1} className="img-fluid" alt="logo" />
                </div>
            </div>
            <div className="row" id='verde'>
                <div className="col-md-6 order-3 order-md-2 " id='wapper3'>
                    <img src={menu2} className="img-fluid" alt="logo" />
                </div>
                <div className="col-md-1 order-2 oirder-md-2"></div>
                <div className="col-md-4 order-3 order-md-2" id='text-pls-3' >
                    <br></br>

                    <h1 data-aos="fade-right"><strong>THE HOME OF THE AWARD-WINNING WIPEPOD</strong></h1>
                    <hr id='hr-black'></hr>
                    <p>Wet wipes are used very frequently in almost every household, venue and workplace as baby wipes, nursing wipes, kitchen wipes, grime wipes, gym wipes, industrial wipes and many more. In fact, it is believed that in the UK alone, we dispose of 11,000,000,000 wet wipes every year.</p>

                    <p>The Hygiene Company is the home of the Wipepod®: the award-winning, low-cost antibacterial wet wipes dispenser. Since its launch, the Wipepod® has become a widely recognised product and an essential feature of many organisations, including: the NHS, Aviva, British Gas, National Grid, De Vere Hotels and Nuffield Health, as well as hundreds of gyms, healthcare centres, offices, kitchens, petrol stations, fast food outlets, and supermarkets across the UK.
                    </p>
                    
                    <Link as={Link} to="/wipepod"><button type="button" class="botoncito" >Discover + <span></span><span></span><span></span><span></span></button></Link>

                </div>
                <div className="col-md-1 order-3 oirder-md-2"></div>



            </div>

            <div className="row" id='negro'>
                <div className="col-md-1"></div>
                <div className="col-md-4 order-1 order-md-0" id='text-pls-3' >
                    <br></br>
                    <br></br>

                    <h1 data-aos="fade-left"><strong>WET WIPE & SANITISER DISPENSERS</strong></h1>
                    <hr id='hr-green'></hr>
                    <p >Our dispenser range offers a sleek and effective hygiene solution that will enhance your facilities and corporate image.
                    </p>
                    <p>From simple wall-mounted wipes dispensers to multifaceted wipe dispensers with built-in antiviral hand foamers and waste bins, the array of smart dispenser options offered by The Hygiene Company guarantees that all of our clients will find the perfect hygiene solution for their business.</p>
                    
                    <Link as={Link} to="/dispenser"><button type="button" class="botoncito2" >Discover + <span></span><span></span><span></span><span></span></button></Link>


                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6 order-0 order-md-1" id='wapper2' >
                    <img src={menu3} className="img-fluid" alt="logo" />
                </div>
            </div>
            <div className="row" id='verde'>
                <div className="col-md-6 order-3 order-md-2 " id='wapper3'>
                    <img src={menu4} className="img-fluid" alt="logo" />
                </div>
                <div className="col-md-1 order-2 oirder-md-2"></div>
                <div className="col-md-4 order-3 order-md-2" id='text-pls-3' >
                    <br></br>

                    <h1 data-aos="fade-right"><strong>CUSTOMISATION FOR YOUR BRAND</strong></h1>
                    <hr id='hr-black'></hr>
                    <p>With their elegant and professional design, our products will improve the aesthetic of any environment. What’s more, the majority of our products, such as our dispensers and cleaning stations, can be fully customised. Depending on your wants and needs, our products can feature your logo and your own bespoke message, and are also available in a variety of colour options to match the palette of your facilities or branding.</p>

                    <p>This personal touch not only maintains brand consistency, but it also increases the visibility of your hygiene policies and company, while promoting good hygiene practice.
                    </p>

                    <Link as={Link} to="/about-us"><button type="button" class="botoncito" >Discover + <span></span><span></span><span></span><span></span></button></Link>


                </div>
                <div className="col-md-1 order-3 oirder-md-2"></div>



            </div>
        </div>
    )
}
