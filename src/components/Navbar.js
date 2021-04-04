import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className="NavBar">    
                Michael Lee
                <nav>
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

                </nav>
            </div>
        </header>
      
    );
}

export default Navbar;

