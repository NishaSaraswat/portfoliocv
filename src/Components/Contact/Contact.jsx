import React from 'react'
import classes from '../Contact/Contact.module.css'
import contact from'../../Images/contact.jpeg'


function Contact() {
  return (
    <div className={classes.Contact}>
      <div className="contact component__space">
        <div className="row">
          <div className="col__2">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="hire__text">
                  Contact Me
                </h1>
                <p className="hire_text white">e-mail:<strong> nisha0217@gmail.com</strong></p>
              </div>
              <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
              </div>
            </div>
          </div>
          <div className="col__2">
            <img src={contact} alt="contact"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
