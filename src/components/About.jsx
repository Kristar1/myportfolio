import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Icon } from '@iconify/react';
import Skill from './Skill';
export default function About() {
  return (
    <>
  <div className='about specialSection'>
  <div className="img-container">
    <img src="assets/pic.jpg" alt="" />
  </div>
  <div className="aboutPara">
    <h1> About Me</h1>
    <p>
      Hi,I am Krish Kedia a self taught and passionate MERN Stack Developer and UI/UX Designer from India currently looking for new exciting projects.
    </p>
    <p> I develop websites with React , Mongodb as database and Node.js . I can also build professional websites with webflow.  </p>
    <p>Being a diligent, hardworking and result oriented person, I always work towards achieving best result on each project I lay my hands on.</p>
    <div className="text">
    <div className='bold'> Get to know me better</div>
    <div className="circle"><a href="#skillset"><Icon  className="downarrow" icon="ep:arrow-down" /></a></div> 
  </div>
  </div>
  </div>
  
  <Skill/>
  <div className="getintouch">
    <h2>Have a project in mind?
Feel free to share it!</h2>
<HashLink to="/#contact" className="bigCircle">
  <p>Get in touch</p>
  <Icon icon="ep:arrow-right" />
</HashLink>
  </div>
  </>
    )
}
