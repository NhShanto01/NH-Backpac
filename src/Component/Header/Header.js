import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h2>Welcome to NH-HUB</h2>
            {/* <h2>Welcome to NH-Backpack</h2> */}
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/review">Review</CustomLink>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
        </div>
    );
};

export default Header;