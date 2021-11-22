import React,{useState} from 'react'
import classes from '../Contact/Contact.module.css'
import contact from '../../Images/contact.jpeg'
import emailjs from 'emailjs-com'


function Contact() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    message:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    })
    console.log(inputValue)
  }
  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_v406att', 'template_7oxkd99', e.target, 'user_PZWxdoAhnf3K7WNNLym0P')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className={classes.Contact} id="Contact">
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
              <form onSubmit={sendEmail} autocomplete="off">
              <div className="input__box">
                  <input name="name" value={inputValue.name} type="text" className="contact name" placeholder="Your name *" onChange={handleChange} required={true} autocomplete="off"/>
                  <input name="email" value={inputValue.email} type="email" className="contact email" placeholder="Your Email *" onChange={handleChange} required={true} autocomplete="off"/>
                          <textarea name="message" value={inputValue.message} id="message" placeholder="Write Your message" onChange={handleChange} required={true}></textarea>
                         <a><button className="btn contact pointer" type="submit">Send</button></a>
              </div>
              </form>
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
