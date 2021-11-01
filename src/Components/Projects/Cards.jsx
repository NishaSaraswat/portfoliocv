import React from 'react'
import classes from '../Projects/Card.module.css'

function Cards(props) {
  return (
   <div className={classes.Projects}>
          <div className={classes.flipCard}>
              <div className={classes.flipCardInner}>
              <div className={classes.flipCardFront}>
                <img src={props.img} alt="project" style={{ width: 270, height: 285,borderRadius: 10}}/>
              </div>
            <div className={classes.flipCardBack}>
            <p>{props.title}
              <br></br>
              <span className={classes.Description}>{props.description}</span></p>
                <div className={classes.Cardbutton}> 
                  <button className='live btn pointer'>See Live</button>
                </div>
                <div className={classes.Cardbutton}>
                  <button className='live btn pointer'>Github</button>
                </div>
              </div>
              </div>
          </div>

    </div>
  )
}

export default Cards
