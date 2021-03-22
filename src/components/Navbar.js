import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div>
                <NavLink>
                    Home
                </NavLink>
                <NavLink>
                    About
                </NavLink>
                <NavLink>
                    Projects
                </NavLink>
                <NavLink>
                    Socials
                </NavLink>
                <NavLink>
                    Contact
                </NavLink>
            </div>
        </header>
      
    );
}

export default Navbar;

