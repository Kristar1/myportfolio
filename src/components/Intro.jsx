import React, {  useEffect, useRef } from 'react'
import { init } from 'ityped';
import { Icon } from '@iconify/react';
import { HashLink } from 'react-router-hash-link';

export default function Intro() {
    const textRef= useRef();
    useEffect(()=>{
        init(textRef.current, { showCursor: true,   backDelay:  1000, strings: ['Developer', 'Designer' ] })
    },[])

  return (
    <div className='section intro' id='hero'>
    <div className="left">
        <div className="imgContainer">
            <img src="assets\Blogging Minimalistic\Blogging Minimalistic\blogging.svg" alt="my img" />
        </div>
    </div>
     <div className="right">
         <div className="wrapper">
             <h2>Hi , I'm </h2>
             <h1>Krish</h1>
             <h3>Freelance <span ref={textRef}></span></h3>
             <p>I will help your team win customers by building value through strategic web design, people-centric digital experiences, and developing high-quality websites that stand out from the competition.</p>
             <div className="text">
   Contact me <a href="#contact" className='circ' ><Icon icon="ep:arrow-right" width="30" height="30" /></a>
  </div>
         </div>
       
     </div>
     </div>
    )
}
