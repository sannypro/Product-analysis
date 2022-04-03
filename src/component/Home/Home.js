import React from 'react';
import './Home.css'
import bikePic from "../../assets/Image/home-page-bike.jpg"

const Home = () => {
    return (
        <main className='container'>
            <section>
                <div className='row'>
                    <div className='col-lg-6 '>
                        <h1>
                            Your next bike
                        </h1>
                        <h1 className='home-tile'>
                            Your best bike
                        </h1>
                        <p>bicycle, also called bike, two-wheeled steerable machine that is pedaled by the rider's feet. On a standard bicycle the wheels are mounted in-line in a metal frame, with the front wheel held in a rotatable fork. The rider sits on a saddle and steers by leaning and turning handlebars that are attached to the fork</p>

                        <button className='p-3'>Live demo</button>
                    </div>
                    <div className='col-md-6 '>
                        <img className='img-fluid' src={bikePic} alt="" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;