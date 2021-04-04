import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div>    
                Michael Lee
                <NavLink to="/" exact>
                    Home
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/project">
                    Projects
                </NavLink>
                <NavLink to="/social">
                    Socials
                </NavLink>
                <NavLink to="/contact">
                    Contact
                </NavLink>
            </div>
        </header>
      
    );
}

export default Navbar;

