import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='container'>
            <h2 className='text-center mb-4'>What our customer says</h2>
            <div className='row '>
                {
                    reviews.map(review => <Review review={review} key={review.id} />)
                }
            </div>

        </div>
    );
};

export default Reviews;