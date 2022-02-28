import React from 'react'

export default function Contact() {
  return (
    <div className='specialSection contact' id='contact'>
        <div className="contactLeft">
            <img src="assets/shake.svg" alt="" />
        </div>
        <div className="contactRight">
            <h2>Get in touch</h2>
        <form action='https://formsubmit.co/kediak32@gmail.com'  method="POST"   value="table">
            <input type="text" placeholder=' Full Name'   name="name"/>
            <input type="email" placeholder='Email Address'  name="email" _replyto="thanks for the submission" />
            <textarea  placeholder='Tell me about the project' name='message'  />
            <input type="hidden" name="_next" value="http://localhost:3000"></input>
            <input type="hidden" name="_subject" value="New submission!"></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_autoresponse" value="Thanks for submitting your message,
            I will contact you as fast as possible"></input>
            <input type="hidden" name="_template" value="table"></input>
            <button type='submit'> Submit</button>
        </form>
        </div>
    </div>
  )
}
