import React from 'react'
import classes from '../Home/Home.module.css'
import logo from '../../Images/logo.png'


function Home() {
  
  return (
    <div className={classes.Home} id="Home">
      <div className={classes.Home__Bg}>
        <div className="header d__flex align__items__center pxy__30" style={{backgroundColor:"#191919",marginTop:'-50px',position:'fixed',width:'100%'}}>
          <div className="logo">
            <img src={logo} alt="logo" style={{ height: 50, width: 60 }} />
          </div>
          <div className="navigation">
            <ul className="navbar d__flex">
              <a href="#Home"><li className="nav__items mx__15">Home</li></a>
              <a href="#AboutMe"><li className="nav__items mx__15">AboutMe</li></a>
              <a href="#Projects"><li className="nav__items mx__15">Projects</li></a>
              <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className={classes.HomeContent}>
            <div className={classes.HomeMeta}>
              <h1 className={classes.HomeText}>Welcome To My Page</h1>
              <h2 className={classes.HomeText}>
                Hi, I'm Nisha
              </h2>
              <h3 className={classes.HomeText}>
                Frontend Developer
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
