import React, { useState } from 'react'
import { GoCode, GoReport, GoX } from "react-icons/go";
import Scrollspy from 'react-scrollspy'

const Navbar = () => {

    const [Click, setClick] = useState(false);
    const handleClick = () => setClick(!Click);
    const closeMobileMenu = () => setClick(false);

    return ( 
        <nav class="navbar fixed-top">
            <div className="contrainer fluid">
                <div className="logo">
                    <a className="text" href="#">Portfolio<GoCode /></a>
                </div>
                <div className="mobile-menu" onClick={handleClick}>
                    {Click ? (
                        < GoX />
                    ) : (
                        < GoReport />
                    )}
                </div>
                    <Scrollspy items={ ['about','services','contact'] } currentClassName="menu-link" className="menu">
                        <li className="menu-link">
                            <a className="link" href="#about">About</a>
                        </li>
                        <li className="menu-link">
                            <a className="link" href="#services">Services</a>
                        </li>
                        <li className="menu-link">
                            <a className="link" href="#contact">Contact</a>
                        </li>
                    </Scrollspy>
            </div>
        </nav>
    )
}

export default Navbar