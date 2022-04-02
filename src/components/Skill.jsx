import React from 'react'
import { Icon } from '@iconify/react';

export default function Skill() {
  return (
<div   className='skillset' id="skillset"> 
   <h2>My Skillset</h2>
   <div className="skill">
   <Icon  className='Icon'  icon="akar-icons:html-fill" />
   {/* <Icon  className='Icon'  icon="akar-icons:css-fill" /> */}
   <Icon  className='Icon' icon="cib:javascript" />
   <Icon  className='Icon' icon="cib:react" />
   {/* <Icon className='Icon' icon="logos:nextjs" /> */}
   {/* <Icon className='Icon' icon="logos:express" /> */}
   <Icon  className='Icon' icon="fa6-brands:node" />
   <Icon  className='bigIcon'  icon="logos:mongodb" />
   {/* <Icon  className='Icon' icon="logos:graphql" /> */}
   {/* <Icon className='Icon' icon="akar-icons:github-fill" /> */}
   <Icon  className='Icon' icon="logos:figma" />
   <Icon  className='Icon'  icon="logos:webflow" />
   </div>
  </div>
  )
}
