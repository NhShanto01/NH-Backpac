import React from 'react';
import CustomarReviews from '../CustomarReviews/CustomarReviews';
import useReviews from '../hook/useReviews';
import './Reviews.css';


const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='reviews'>
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