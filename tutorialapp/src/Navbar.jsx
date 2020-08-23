import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        <NavLink exact to='/'>About Us</NavLink>
        <div/>
        <NavLink exact to='/search'>Search</NavLink>
        </>
    );
}

export default Navbar;