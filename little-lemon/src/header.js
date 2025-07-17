import './style.css';
import React from 'react';
import logo from './photo/logo.jpg';

function Header(){
    return(
        <div className="logo">
            <img src={logo} alt="Little Lemon Logo" />
        </div>
    )
}

export default Header;