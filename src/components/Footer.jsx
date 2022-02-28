import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer__container">
    <div className="footer__links">
        <div className="footer__link--items">
          <h2>I'm always happy to chat about:</h2>
          <a href='/'>UX/UI</a> <a href="/">MERN Stack </a>
          <a href="https://webflow.com">Webflow</a> <a href="/">Finance</a>
        </div>
        <div className="footer__link--items">
          <h2>Know More:</h2>
          <HashLink to="/#projects">My Works</HashLink> <HashLink to="/#process">My Process</HashLink>
          <HashLink to="/about">About Me</HashLink>
        </div>
        
    </div>
    <section className="social__media">
      <div className="social__media--wrap">
        <div className="footer__logo">
          <a href="/" id="footer__logo">Designed and developed by Krish Kedia</a>
        </div>
        <p className="website__rights">© Copyright 2022. All rights reserved</p>
        <div className="social__icons">
          <a href="/" className="social__icon--link" target="_blank"
            ><i className="fab fa-facebook"></i
          ></a>
          <a href="https://www.instagram.com/kedia_krish/" className="social__icon--link"
           target='_blank' ><i className="fab fa-instagram"></i
          ></a>
          
          <a href="https://www.linkedin.com/in/krish-kedia-b0270a22b" className="social__icon--link"
            target='_blank'><i className="fab fa-linkedin"></i
          ></a>
          <a href="https://twitter.com/the_Krish_Kedia/media"  target='_blank'  className="social__icon--link"
            ><i className="fab fa-twitter"></i
          ></a>
        </div>
      </div>
    </section>
  </div>
  )
}
