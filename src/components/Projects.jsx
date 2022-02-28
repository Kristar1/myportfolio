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
               <h3> Filterable List</h3>
               <p>
                   This is a filterable list made with html, css and javascript.When you toggle the menu bar the list will change. 
               </p>
          <div className="more">
              <div className="links">
              <a   target="_blank" href="https://kristar1.github.io/filterproject/">Live Demo</a>
              <a href="https://github.com/Kristar1/filterproject"  target='_blank'><Icon icon="ant-design:github-filled" width="30" height="30" /></a>
              </div>
              <div className="language">
   <Icon  className='smallIcon'  icon="akar-icons:html-fill" />
   <Icon  className='smallIcon' icon="cib:css3-shiled"  />
   <Icon  className='smallIcon' icon="cib:javascript" />
                  
              </div>
          </div>
           </div>
           <div className="projectImage">
               <a href="https://kristar1.github.io/filterproject/" target="_blank">
             <img src="assets/p2.jpeg" alt="" /></a>
           </div>
       </div></div>
       <div className="pWrapper">
       <div className="projectWrapper">
           <div className="projectDesc">
               <h3> Todo List</h3>
               <p>
                   This is a todo list to set your daily activities in it so that you dont have to remember what to do and what not to do.
               </p>
          <div className="more">
              <div className="links">
              <a   target="_blank" href= "https://621a2e952c2abffd07bd3179--objective-edison-d6dbd0.netlify.app/">Live Demo</a>
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
               <a href="https://621a2e952c2abffd07bd3179--objective-edison-d6dbd0.netlify.app/" target="_blank">
             <img src="assets/p3.jpeg" alt="" /></a>
           </div>
       </div></div>
     
       
       </div>
   </div>
  )
}
