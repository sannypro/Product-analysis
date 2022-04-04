import './Home.css'
import bikePic from "../../assets/Image/home-page-bike.jpg"
import { Link } from 'react-router-dom';
import useReviews from '../Hooks/useReviews';
import SliceReview from '../SliceReview/SliceReview';



const Home = () => {
    const [reviews] = useReviews();
    const sliceReviews = reviews.slice(0, 3)

    return (


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
            <section className='mt-5 mb-5'>
                <h2 className='text-center customer-review-title'>Customer Reviwes</h2>
                <div className='mt-5'>
                    <div className='row justify-content-evenly'>
                        {
                            sliceReviews.map(sliceReview => <SliceReview sliceReview={sliceReview} key={sliceReview.id} />)
                        }

                    </div>

                </div>
                <div className='button-div mt-4 mb-5'>
                    <Link to="reviews"> <button className='  mt-4 see-all position-absolute top-50 start-50 px-4 translate-middle btn mb-4'>See all reviews</button></Link>
                </div>

            </section>

        </main>

    );
};

export default Home;