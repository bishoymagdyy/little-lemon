
import React from 'react';
import logo from './photo/logo.jpg'; // Relative import from src

function Header(){
    return(
        <header>
            <img src={logo} alt="Little Lemon Logo" width="50%" />
        </header>
    )
}

export default Header;