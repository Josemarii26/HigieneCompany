import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import widepod from './widepod0Mejor.jpg';
import wipes from './widepod0Mejor2.jpg';
import { Link } from 'react-router-dom';


import { useTranslation } from 'react-i18next';

export const TextoCentradoMenu = () => {

    const [t, i18n] = useTranslation("global");


    return (
        <Carousel
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            swipeable={true}
            showThumbs={false}
            showStatus={false}
            startIndex={1}>
            <div>
                <div className="image-container">
                    <img src={wipes} className="img-fluid" alt="logo" />
                    <div className="text-overlay">
                        <h1><strong id='text-gold'>¡Nuevo concepto</strong> para tu gimnasio!</h1>
                        <h2>Infórmate y no te quedes atrás</h2>
                        
                        <Link as={Link} to="/gym-zone"><button type="button" class="botoncito3" >Discover + <span></span><span></span><span></span><span></span></button></Link>
                    </div>

                </div>
            </div>
            <div>
                <div className="image-container">
                    <img src={widepod} className="img-fluid" alt="logo" />
                    <div className="text-overlay2" > <h1 className='titulo' ><strong> Probablemente <br></br>la mejor "WiPE" del mercado</strong></h1>
                        <Link as={Link} to="/wipes"><button type="button" class="botoncito" >Discover + <span></span><span></span><span></span><span></span></button></Link>

                    </div>

                </div>
            </div>


        </Carousel>
    );
}
