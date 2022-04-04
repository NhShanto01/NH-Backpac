import React from 'react';

const CustomarReviews = ({ data }) => {
    const { name, picture, title, reviews } = data;
    return (
        <div className='review'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h3>{title}</h3>
            <p><b>{reviews}</b></p>
        </div>
    );
};

export default CustomarReviews;