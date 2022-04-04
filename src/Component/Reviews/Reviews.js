import React from 'react';
import CustomarReviews from '../CustomarReviews/CustomarReviews';
import useReviews from '../hook/useReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1>hello reviews</h1>
            {
                reviews.map(data => <CustomarReviews
                    key={data.id}
                    data={data}
                ></CustomarReviews>)
            }
        </div>
    );
};

export default Reviews;