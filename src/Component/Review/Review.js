import React from 'react';

const Review = (props) => {
    const { name, picture, title, review } = props.review;
    // console.log(data);
    return (
        <div>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h3>{title}</h3>
            <p><b>{review}</b></p>
        </div>
    );
};

export default Review;