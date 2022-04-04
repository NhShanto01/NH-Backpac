import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CustomarReviews.css';


const CustomarReviews = ({ data }) => {
    const { name, picture, date, title, reviews, rating } = data;
    return (
        <div className='review'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p><small>{date}</small></p>
            <h3>{title}</h3>
            <p><b>{reviews}</b></p>
            <p><b>Rating : {rating} <span>
                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
            </span></b></p>



        </div>
    );
};

export default CustomarReviews;