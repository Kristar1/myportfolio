import React, {  useEffect, useRef } from 'react'
import { init } from 'ityped';
import { Icon } from '@iconify/react';
import { HashLink } from 'react-router-hash-link';

export default function Intro() {
    const textRef= useRef();
    useEffect(()=>{
        init(textRef.current, { showCursor: true,   backDelay:  1000, strings: ['Web Developer', 'UI/UX Designer' ] })
    },[])

  return (
    <div className='section intro' id='hero'>
    <div className="left">
        <div className="imgContainer">
            <img src="assets/heroimg.webp" alt="my img" />
        </div>
    </div>
     <div className="right">
         <div className="wrapper">
             <h1> Hi , I'm Krish</h1>
             <h2>Freelance <span ref={textRef}></span></h2>
             <p>I will help your team win customers by building value through strategic web design, people-centric digital experiences, and developing high-quality websites that stand out from the competition.</p>
             <div className="text">
                 <div className='contactLine'>Contact me    <div className="underline"/></div>
              
    <a href="#contact" className='circ' ><Icon icon="ep:arrow-right" width="30" height="30" /></a>
  </div>
         </div>
       
     </div>
     </div>
    )
}
