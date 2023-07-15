import React from 'react'
import gym from './Gym.jpg';
import home from './Home.jpg';
import hospitals from './Hospitals.jpg';
import kitchens from './Kitchens.jpg';
import offices from './Offices.jpg';
import restaurants from './Restaurants.jpg';
import schools from './Schools.jpg';
import vet from './Vet.jpg';
import workshop from './Workshops.jpg';


export const Gallery = () => {
    return (
        <><div className="row" id='tres-columnas'>
            <h1><strong>Perfect for any Environment</strong></h1>
            <hr />
            <br></br>
            <div className="col-md-4" id='image-container'>
                <img src={gym} className="img-fluid" alt="logo" id='image' />
                <h2 id='text'>GYMS</h2>
            </div>
            <div className="col-md-4">
                <img src={offices} className="img-fluid" alt="logo" id='image' />
                <h2>OFFICES</h2>

            </div>
            <div className="col-md-4">
                <img src={restaurants} className="img-fluid" alt="logo" id='image' />
                <h2 >RESTAURANTS</h2>

            </div>
        </div>
            <div className="row" id='tres-columnas'>
                <div className="col-md-4">
                    <img src={kitchens} className="img-fluid" alt="logo" id='image' />
                    <h2>KITCHENS</h2>
                </div>
                <div className="col-md-4">
                    <img src={workshop} className="img-fluid" alt="logo" id='image' />
                    <h2>WORKSHOPS</h2>

                </div>
                <div className="col-md-4">
                    <img src={hospitals} className="img-fluid" alt="logo" id='image' />
                    <h2>HOSPITALS</h2>

                </div>
            </div><div className="row" id='tres-columnas'>
                <div className="col-md-4">
                    <img src={vet} className="img-fluid" alt="logo" id='image' />
                    <h2>VET SURGERIES</h2>
                </div>
                <div className="col-md-4">
                    <img src={schools} className="img-fluid" alt="logo" id='image' />
                    <h2>SCHOOLS</h2>

                </div>
                <div className="col-md-4">
                    <img src={home} className="img-fluid" alt="logo" id='image' />
                    <h2>HOME</h2>

                </div>
            </div></>



    )
}
