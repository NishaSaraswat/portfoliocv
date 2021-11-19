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
    <div className={classes.About} id="AboutMe">
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
              I’ m currently pursuing my‘ Frontend Utvecklare’ course from‘ Jensen yrkehögskola’ and would like to apply
                  for the position of ‘Frontend Developer - Trainee'.
                  <br></br>
              I believe that I’m a strong candidate based upon my professional/Technical qualifications and individual/team projects pursued during my course at ‘Jensen yrkehögskola’.
              </p>
              <p  className='aboutText p__color'>
              I like taking initiatives and coming up with new ideas that lead to desired results.I value teamwork, sharing knowledge.I 'm flexible in my work with a '
              positive can - do mentality '. I have a curious nature and like to update myself professionally. I have attached a copy of my resume detailing my experience, technical skills along with contact details. 
                  I would truly appreciate an opportunity to speak / meet to discuss further on the above profile.
                  <br></br>
                  Many Thanks
                  <br></br>
                  Nisha
              </p>
              <div className = "about__button d__flex align__items__center">
                <a href="/files/Resume_Nisha.pdf" download><button className='about btn pointer'>Download CV</button></a>
                <a href='#Contact'><button className='about btn pointer'>Hire Me</button></a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className={classes.UptoTop}>
          <a href="#Home" onClick={scrollToTop} style={{display:show ? 'inline' : 'none'}}>
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
