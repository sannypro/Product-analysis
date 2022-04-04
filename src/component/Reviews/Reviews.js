import React, { useContext, useEffect } from 'react';
import { ReviewsContext } from '../../App';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useContext(ReviewsContext);
    useEffect(() => {
        fetch("fakerating.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [setReviews])
    console.log(reviews);

    return (
        <div className='container'>
            <h2 className='text-center mb-4'>What our customer says</h2>
            <div className='row '>
                {
                    reviews.map(review => <Review review={review} />)
                }
            </div>

        </div>
    );
};

export default Reviews;