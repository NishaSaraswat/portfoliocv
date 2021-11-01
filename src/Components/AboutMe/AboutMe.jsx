import React from 'react'
import classes from '../AboutMe/AboutMe.module.css'
import aboutme from '../../Images/about.png'

function AboutMe() {
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
    </div>
  </div>
  )
}

export default AboutMe
