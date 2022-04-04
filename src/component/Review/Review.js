
import { Card } from 'react-bootstrap';


const Review = ({ review }) => {

    return (
        <div className='col-lg-4 mb-3 '>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Name: {review?.name}</Card.Title>
                    <Card.Text>
                        Comment: {review?.comment}
                    </Card.Text>
                    <Card.Text>
                        Rating: {review?.rating}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;