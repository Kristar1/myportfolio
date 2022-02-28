import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useState} from 'react';
const Navbar = () => {

const [mobile, setMobile] = useState('false');
const [underline, setUnderline] = useState('false');

    const mobileMenu=()=>{
        setMobile(!mobile)
    }

   
  return (
    <div className="navbar">
        <div className="navbar__container">
        <a href="#hero" id="navbar__logo"><img src="assets/logo.png" alt="" className='logo' /></a>
        <div className={`navbar__toggle ${mobile? "is-active" : null}`} id="mobile-menu"onClick={mobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        <ul className={`navbar__menu ${mobile? "active" : null}`}>
        <li className={`navbar__item  `}>
            <Link to="/" className={`navbar__links  `} id="home-page" > Home</Link>
        </li>
        <li className={`navbar__item    `}>
        <HashLink to="/#projects" className="navbar__links">Projects</HashLink>
        </li>
        <li className="navbar__item">
            <HashLink to="/#process" className="navbar__links" > Process</HashLink>
        </li>
        <li className={`navbar__item    `}>
            <Link to="about" className="navbar__links" id="about-page" > About</Link>
        </li>
        <li className="navbar__btn">
            <HashLink to="/#contact" className="button" id="dashboard">Let' talk</HashLink>
        </li>
        </ul>
        </div>
    </div>

  )
}

export default Navbar;
