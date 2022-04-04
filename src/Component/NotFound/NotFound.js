import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/istockphoto-1204555394-170667a.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notfound'>
            <div className='notfound-img'>
                <img src={img} alt="" />
            </div>
            <div className='notfound-text'>
                <h2>PAGE NOT FOUND</h2>
                <p><b>This page you are looking for might have been removed <br />
                    had its name changed or is temporarily unavailable</b></p>

            </div>
            <Link to="/home" className='notfound-btn'> Back To Home</Link>
        </div>
    );
};

export default NotFound;