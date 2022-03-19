import React from 'react'
import { Icon } from '@iconify/react';

export default function Projects() {
  return (
   <div className=" specialSection projects" id="projects">
       <h2> My Projects</h2>
       <div className="p">

           {/* <div className="pWrapper">
       <div className="projectWrapper">
           <div className="projectDesc">
               <h3> Fitness Website</h3>
               <p>
                   This is a website for a fitness page <a  target='_blank'  href="https://www.instagram.com/letsmakeyoufit/">@letsmakeyoufit</a> with more than 2k followers on instagaram.
                   This webite is made to tell more about the page , its products and motives and aim with which it was formed.
               </p>
          <div className="more">
              <div className="links">
              <a    target="_blank" href="https://kristar1.github.io/my-websites/">Live Demo</a>
              <a href=""  target='_blank'><Icon icon="ant-design:github-filled" width="30" height="30" /></a>
              </div>
              <div className="language">
   <Icon  className='smallIcon'  icon="akar-icons:html-fill" />
   <Icon  className='smallIcon' icon="cib:css3-shiled"  />
   <Icon  className='smallIcon' icon="cib:javascript" />
                  
              </div>
          </div>
           </div>
           <div className="projectImage">
               <a target="_blank" href="https://kristar1.github.io/my-websites/">
             <img src="assets/p4.jpeg" alt="" /></a>
           </div>
       </div></div> */}
         <div className="pWrapper">
       <div className="projectWrapper">
           <div className="projectDesc">
               <h3> Tinder Clone</h3>
               <p>
                   This is a tinder clone made with mern stack . It has all the features like signup/login, advanced authentication, matching people by swiping right and messaging them. Make and account and start texting.
               </p>
          <div className="more">
              <div className="links">
              <a   target="_blank" href="https://tinder-rust.vercel.app/dashboard">Live Demo</a>
              <a href="https://github.com/Kristar1/tinderapp"  target='_blank'><Icon icon="ant-design:github-filled" width="30" height="30" /></a>
              </div>
              <div className="language">
   <Icon  className='smallIcon'  icon="akar-icons:html-fill" />
   <Icon  className='smallIcon' icon="cib:css3-shiled"  />
   <Icon  className='smallIcon' icon="cib:javascript" />
                  
              </div>
          </div>
           </div>
           <div className="projectImage">
               <a href="https://tinder-rust.vercel.app/" target="_blank">
             <img src="assets/tinder.png" alt="" /></a>
           </div>
       </div></div>
           <div className="pWrapper">
       <div className="projectWrapper">
           <div className="projectDesc">
               <h3> Login/Sign Website </h3>
               <p>
                   This is a website in which you can login or signup and get your quote stored in our database.This ia full mern stack and responsive site with beautiful linear gradient design.
               </p>
          <div className="more">
              <div className="links">
              <a    target="_blank" href="https://login-start-ruby.vercel.app">Live Demo</a>
              <a href="https://github.com/Kristar1/mern"  target='_blank'><Icon icon="ant-design:github-filled" width="30" height="30" /></a>
              </div>
              <div className="language">
              <Icon  className='SmallIcon'icon="akar-icons:react-fill" />
              <Icon  className='SmallIcon' icon="fa6-brands:node" />
              <Icon className='SmallIcon' icon="vscode-icons:folder-type-mongodb" />
        
                  
              </div>
          </div>
           </div>
           <div className="projectImage">
               <a target="_blank" href="https://login-start-ruby.vercel.app">
             <img src="assets/p4.jpeg" alt="" /></a>
           </div>
       </div></div>
           <div className="pWrapper">
       <div className="projectWrapper">
           <div className="projectDesc">
               <h3> Memory Game</h3>
               <p>
               It's a memory game to remember a card. 12 cards drawn on board, user needs to select a card. The card flip and show a image. Now user needs to select any other card. If both the cards matches, both cards will be matched  else the second card flip back . 
               </p>
          <div className="more">
              <div className="links">
              <a    target="_blank" href="https://kristar1.github.io/my-websites/">Live Demo</a>
              <a href="https://github.com/Kristar1/my-websites"  target='_blank'><Icon icon="ant-design:github-filled" width="30" height="30" /></a>
              </div>
              <div className="language">
   <Icon  className='smallIcon'  icon="akar-icons:html-fill" />
   <Icon  className='smallIcon' icon="cib:css3-shiled"  />
   <Icon  className='smallIcon' icon="cib:javascript" />
                  
              </div>
          </div>
           </div>
           <div className="projectImage">
               <a target="_blank" href="https://kristar1.github.io/my-websites/">
             <img src="assets/p1.jpg" alt="" /></a>
     
           </div>
       </div></div>
      
       <div className="pWrapper">
       <div className="projectWrapper">
           <div className="projectDesc">
               <h3>  Blog App </h3>
               <p>
                   This is a blog app to send blogs to people annd it has different sections like recent posts, related posts and comments, etc
               </p>
          <div className="more">
              <div className="links">
              <a   target="_blank" href="https://blogapp-krish.vercel.app/">Live Demo</a>
              <a href="https://github.com/Kristar1/blog"  target='_blank'><Icon icon="ant-design:github-filled" width="30" height="30" /></a>
              </div>
              <div className="language">
   <Icon  className='smallIcon'  icon="akar-icons:html-fill" />
   <Icon  className='smallIcon' icon="cib:css3-shiled"  />
   <Icon  className='smallIcon' icon="cib:javascript" />
                  
              </div>
          </div>
           </div>
           <div className="projectImage">
               <a href="https://blogapp-krish.vercel.app/" target="_blank"/>
                   <img src="assets/p5.jpeg" alt="" />
           </div>
       </div></div>
     
       
       </div>
   </div>
  )
}
