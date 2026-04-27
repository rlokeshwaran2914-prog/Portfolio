import React from 'react'
import "./Contact.css"
import call from "../../assets/call.png";
import email from "../../assets/email.png"

function Contact() {
  return (
    <div id='contact' className='contact'>
      <div className='contact-section'>
        <div className='contact-title'>Get in touch</div>

        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>I'm currently available to talk. Feel free to reach out!</p>

          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={call} alt='call icon' className='contact-icon' />
              <a href="tel:9551196083"className="contact-link">9551196083</a>
            </div>

            <div className='contact-detail'>
              <img src={email} alt='email icon' className='contact-icon' />
              <a href="mailto:rlokeshwaran2914@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Lokeshwaran,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
              className="contact-link">
                rlokeshwaran2914@gmail.com
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact