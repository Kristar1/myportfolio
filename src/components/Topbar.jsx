import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useState} from 'react';
const Navbar = () => {

    const links=[
      {  
          name:'Home',
          linkTo:"/",
          id:'home-page'
    },
      {  
          name:'Projects',
          linkTo:"/#projects",
          id:'projects-part'
    },
      {  
          name:'Process',
          linkTo:"/#process",
          id:'process-part'
    },
      {  
          name:'About',
          linkTo:"/about",
          id:'about-page'
    },
      
    ]

const [mobile, setMobile] = useState('false');
// const [underline, setUnderline] = useState('false');

    const mobileMenu=()=>{
        setMobile(!mobile)
    }

   
  return (
    <div className="navbar">
        <div className="navbar__container">
        <a href="/" id="navbar__logo"><img src="assets/logo.png" alt="" className='logo' /></a>
        <div className={`navbar__toggle ${mobile? "is-active" : null}`} id="mobile-menu"onClick={mobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        <ul className={`navbar__menu ${mobile? "active" : null}`}>
            {links.map((link)=>(
        <li className={`navbar__item  `} onClick={mobileMenu} key={link.name}>
            <HashLink to={link.linkTo} className={`navbar__links  `} id={link.id} > {link.name}     
            <div className="underlineTopbar"/>
            </HashLink>
        </li>
        ))}
      <li className="navbar__btn" onClick={mobileMenu}>
            <HashLink to="/#contact" className="button" id="dashboard">Let' talk <div className="underline"/></HashLink>
        </li>  
      
        </ul>
        </div>
    </div>

  )
}

export default Navbar;
