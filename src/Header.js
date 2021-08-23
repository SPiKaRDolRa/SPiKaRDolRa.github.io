import React, { useState } from 'react'
import { GoCode, GoReport, GoX } from "react-icons/go";
import Scrollspy from 'react-scrollspy'
import { Navbar, Nav} from 'react-bootstrap';

const Header = () => {

    const [Click, setClick] = useState(false);
    const handleClick = () => setClick(!Click);
    const closeMobileMenu = () => setClick(false);

    return ( 
        <Navbar className="navbar" collapseOnSelect expand="sm" fixed="top">
            <div className="contrainer">
                <Navbar.Brand href="#"><a className="logo">Resume Page<GoCode /></a></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Scrollspy items={ ['about','services','contact'] } currentClassName="menu-link" className="menu">
                            <li className="menu-link"><a className="link" href="#about">About</a></li>
                            <li className="menu-link"><a className="link" href="#services">Services</a></li>
                            <li className="menu-link"><a className="link" href="#contact">Contact</a></li>
                        </Scrollspy>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle bsPrefix="toggle" as="div" aria-controls="responsive-navbar-nav" onClick={handleClick}>
                {Click ? (
                    < GoX />
                ) : (
                    < GoReport />
                )}
                </Navbar.Toggle>
            </div>
        </Navbar>
    )
}

export default Header

        // <nav class="navbar fixed-top">
        //     <div className="contrainer fluid">
        //         <div className="logo">
        //             <a className="text" href="#">Portfolio<GoCode /></a>
        //         </div>
        //         <div className="mobile-menu" onClick={handleClick}>
        //             {Click ? (
        //                 < GoX />
        //             ) : (
        //                 < GoReport />
        //             )}
        //         </div>
        //             <Scrollspy items={ ['about','services','contact'] } currentClassName="menu-link" className="menu">
        //                 <li className="menu-link">
        //                     <a className="link" href="#about">About</a>
        //                 </li>
        //                 <li className="menu-link">
        //                     <a className="link" href="#services">Services</a>
        //                 </li>
        //                 <li className="menu-link">
        //                     <a className="link" href="#contact">Contact</a>
        //                 </li>
        //             </Scrollspy>
        //     </div>
        // </nav>