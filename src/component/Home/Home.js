import React, { useContext, useEffect, } from 'react';
import './Home.css'
import bikePic from "../../assets/Image/home-page-bike.jpg"
import { Card } from 'react-bootstrap';
import { ReviewsContext } from "../../App"
import { Link } from 'react-router-dom';



const Home = () => {
    const [reviews, setReviews] = useContext(ReviewsContext);
    useEffect(() => {
        fetch("fakerating.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [setReviews])

    return (
        <ReviewsContext.Provider value={[reviews, setReviews]}>
            <main className='container'>
                <section>
                    <div className='row '>
                        <div className='col-lg-6 h-100 my-auto items-center'>
                            <h1>
                                Your next bike
                            </h1>
                            <h1 className='home-tile'>
                                Your best bike
                            </h1>
                            <p> KTM AG (Kraftfahrzeug Trunkenpolz Mattighofen, formerly KTM Sportmotorcycle AG) is an Austrian motorcycle, bicycle and sports car manufacturer owned by Pierer Mobility AG & Indian manufacturer Bajaj Auto International Holdings BV. It was formed in 1992 but traces its foundation to as early as 1934.</p>

                            <button className='p-3'>Live demo</button>
                        </div>
                        <div className='col-md-6 '>
                            <img className="img-fluid" src={bikePic} alt="" />
                        </div>
                    </div>
                </section>
                <section className='mt-5'>
                    <h2 className='text-center customer-review-title'>Customer Reviwes</h2>
                    <div className='mt-5'>
                        <div className='row justify-content-evenly'>
                            <Card className='col-lg-4' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Name: {reviews[0]?.name}</Card.Title>
                                    <Card.Text>
                                        Comment: {reviews[0]?.comment}
                                    </Card.Text>
                                    <Card.Text>
                                        Rating: {reviews[0]?.rating}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='col-lg-4' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Name: {reviews[1]?.name}</Card.Title>
                                    <Card.Text>
                                        Comment: {reviews[1]?.comment}
                                    </Card.Text>
                                    <Card.Text>
                                        Rating: {reviews[1]?.rating}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='col-lg-4' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Name: {reviews[2]?.name}</Card.Title>
                                    <Card.Text>
                                        Comment: {reviews[2]?.comment}
                                    </Card.Text>
                                    <Card.Text>
                                        Rating: {reviews[2]?.rating}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                    <div className='button-div mt-4 mb-5'>
                        <Link to="reviews"> <button className=' text-center mt-4 see-all position-absolute top-50 start-50 translate-middle btn mb-4'>See all reviews</button></Link>
                    </div>

                </section>

            </main>
        </ReviewsContext.Provider>
    );
};

export default Home;