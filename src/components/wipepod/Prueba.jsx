import React from 'react'
import workshop from './Workshops.jpg';
import gym from './Gym.jpg';
import home from './Home.jpg';
import hospitals from './Hospitals.jpg';
import kitchens from './Kitchens.jpg';
import offices from './Offices.jpg';
import restaurants from './Restaurants.jpg';
import schools from './Schools.jpg';
import vet from './Vet.jpg';

export const Prueba = () => {
    return (
        <div class="row content">

            <div className="col-md-4 thumbnails">
                <img src={gym} alt="gym"></img>
                <div className="black-oro"></div>
                <div className="title">Gyms
                <br></br>
                <button type="button" class="botoncito3">NEW SECTION! <span></span><span></span><span></span><span></span></button>

                
                </div>
            </div>

            <div className="col-md-4 thumbnails">
                <img src={offices} alt="offices"></img>
                <div className="black"></div>
                <div className="title">Offices</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={restaurants} alt="restaurants"></img>
                <div className="black"></div>
                <div className="title">Restaurants</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={kitchens} alt="kitchens"></img>
                <div className="black"></div>
                <div className="title">Kitchens</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={workshop} alt="workshop"></img>
                <div className="black"></div>
                <div className="title">Workshops</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={hospitals} alt="hospitals"></img>
                <div className="black"></div>
                <div className="title">Hospitals</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={vet} alt="vet"></img>
                <div className="black"></div>
                <div className="title">Vet surgeries</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={schools} alt="schools"></img>
                <div className="black"></div>
                <div className="title">Schools</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={home} alt="home"></img>
                <div className="black"></div>
                <div className="title">Home</div>
            </div>



        </div>



    )
}
