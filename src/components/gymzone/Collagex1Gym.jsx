import React, { useEffect } from 'react'
import stainless2 from './Stainless2.jpg';
import gym2 from './gym2.webp';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Collagex1Gym = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='gold'>
                <div className="col-md-6" id='wapper' >
                    <img src={gym2} className="img-fluid" alt="logo" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4" id="text-pls-3">
                    <br></br>
                    <h1 data-aos="fade-left"><strong>¡NO TE QUEDES ATRÁS!</strong></h1>
                    <hr id='hr-black'></hr>
                    <br></br>
                    <p>Ofrecer este tipo de servicio dentro de un gimnasio o centro deportivo puede aportar un salto de calidad
                        de carácter higiénico y ayudar a diferenciarse de la competencia que no ofrece estos productos.
                        Además, estamos seguro de que el uso de nuestros productos puede ayudar a aumentar la clientela de
                        un establecimiento, gracias a la percepción y a la buena valoración que los clientes tendrán de su centro
                        al ofrecerles unos productos de calidad y aportarles una tranquilidad higiénica considerable.</p>
                    <p>Puedes instalar fácilmente un WIPEPOD en tu gimnasio y hacer que tus clientes disfruten de nuestro
                        WiPES o puedes colocar una una estación de WiPES y ofrécerle a tu gimnasio un producto y concepto
                        nuevo. Tus clientes lo agradecerán. En definitiva, puedes unirte al nuevo movimiento y formar parte de
                        la familia DRM WiPES, no te arrepentirás.</p>
                </div>
                <div className="col-md-1"></div>

            </div>

        </div>
    )
}