import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-title'>
                <h2>NH-BAGPACK</h2>
            </div>
            <div className='header-link'>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/review">Review</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
            </div>
        </div>
    );
};

export default Header;