import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { name, picture, title, reviews } = review;
    // console.log(data);
    return (
        <div className='review'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h3>{title}</h3>
            <p><b>{reviews}</b></p>
        </div>
    );
};

export default Review;