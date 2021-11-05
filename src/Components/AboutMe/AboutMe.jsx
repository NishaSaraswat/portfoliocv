import React, { useState } from 'react'
import classes from '../AboutMe/AboutMe.module.css'
import aboutme from '../../Images/about.png'

function AboutMe() {

  const [show, setShow] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setShow(true)
    } else if (scrolled <= 0) {
      setShow(false)
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      bottom: document.documentElement.scrollHeight,
      behavior: 'auto'
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <div className={classes.About}>
    <div className = 'about component__space'>
      <div className='container'>
        <div className='row'>
          <div className="col__2">
            <img src={aboutme} alt="aboutme" className={classes.AboutImg}/>
          </div>
          <div className="col__2">
            <h1 className={classes.Heading}>About Me</h1>
            <div className={classes.AboutmeMeta}>
              <p  className='aboutText p__color'>
              Lorazepam, sold under the brand name Ativan among others,
              is a benzodiazepine medication.It is used to treat anxiety disorders,
              trouble sleeping, severe agitation, active seizures including status
              epilepticus, alcohol withdrawal, and chemotherapy - induced nausea and
              vomiting.
              </p>
              <p  className='aboutText p__color'>
              Lorazepam, sold under the brand name Ativan among others,
              is a benzodiazepine medication.It is used to treat anxiety disorders,
              trouble sleeping, severe agitation, active seizures including status
              epilepticus, alcohol withdrawal, and chemotherapy - induced nausea and
              vomiting.
              </p>
              <div className = "about__button d__flex align__items__center">
                <a href='#'><button className='about btn pointer'>Download Cv</button></a>
                <a href='#'><button className='about btn pointer'>Hire Me</button></a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className={classes.UptoTop}>
          <a href="#" onClick={scrollToTop} style={{display:show ? 'inline' : 'none'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-up white" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
            <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
          </svg>
          </a>
        </div>
    </div>
  </div>
  )
}

export default AboutMe
