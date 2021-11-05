import React from 'react'
import classes from '../Footer/Footer.module.css'
import logo from '../../Images/footerlogo.png'

function Footer() {
  return (
    <div className={classes.Footer}>
      <div className="footer d__flex align__items__center justify__content__space__between pz-10" style={{ padding: "10px 20px", zIndex: "100" }}>
        <img src={logo} alt="footerlogo" className="footer__img pointer" />
         <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2021 programmer Nisha Saraswat. All Rights Reserved.
      </span>
      </div>
      
    </div>
  )
}

export default Footer
