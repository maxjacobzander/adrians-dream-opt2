import React, { useState } from 'react';
import styled from 'styled-components';
import './Navbar.css';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import LogoText from '../assets/images/logos/AdriansDreamLogoText.jpeg';

const Img = styled.img`
width: auto;
height: 80px;
@media screen and (max-width: 1025px) {
    position: absolute;
    top: 0;
    left: 0;
}
`

const Navbar = () => {
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);

const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                    to="main"
                    className="navbar-logo"
                    onClick={closeMobileMenu}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        <Img src={ LogoText } alt='logo' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                            to='about'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='workshops'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                                WORKSHOPS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='gallery'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                                GALLERY
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='events'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                                UPCOMING EVENTS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='contact'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
