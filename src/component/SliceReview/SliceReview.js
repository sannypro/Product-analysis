import React from 'react';
import { Card } from 'react-bootstrap';

const SliceReview = ({ sliceReview }) => {
    return (
        <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Name: {sliceReview?.name}</Card.Title>
                    <Card.Text>
                        Comment: {sliceReview?.comment}
                    </Card.Text>
                    <Card.Text>
                        Rating: {sliceReview?.rating}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SliceReview;