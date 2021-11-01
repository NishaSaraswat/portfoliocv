import React from "react";
import Card from '../Projects/Cards'
import classes from "../Projects/Projects.module.css";
import project1 from '../../Images/project1.png'
import project2 from '../../Images/project2.png'
import project3 from '../../Images/project3.png'
import project4 from '../../Images/project4.png'


function Projects(props) {
  return (
   <>
    <div className="projects component__space">
      <div className={classes.Heading}>
        <h1 className={classes.Heading}>My projects</h1>
        <p className="p__color">
          Lorazepam, sold under the brand name Ativan among others
        </p>
        <p className="p__color">Lorazepam, sold under the brand name</p>
      </div>
      <div className="container">
          <div className="row">
            {/* Group projects */}
          <div className="col__3">
            <div className={classes.ProjectBox}>
                <Card img={project1} title="The Shoe Shop" description="" />
              </div>
            </div>
          <div className="col__3">
              <div className={classes.ProjectBox}>
                <Card img={project1} title="Photonic" description="A photo chat app built in react, javascript, mongoDB (Mongoosy) and Nodejs" />
              </div>
          </div>

            {/* Individual projects */}
          <div className = "col__3">
              <div className={classes.ProjectBox}>
                <Card img={project1} title="A website for dog daycare" description="Only Html and CSS" />
              </div>
            </div>
            <div className="col__3">
              <div className={classes.ProjectBox}>
                <Card img={project2} title="The-Cook-Book" description="A web application (API, Ajax, Javascript, HTML & CSS)." />
              </div>
            </div>
            <div className="col__3">
              <div className={classes.ProjectBox}>
                <Card img={project3} title="ToDoList" description="A simpel ToDoList in Javascript" />
              </div>
            </div>
            <div className="col__3">
              <div className={classes.ProjectBox}>
                <Card img={project4} title="Movie Search App" description="A simple movie search app using OMBDAPI" />
              </div>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Projects
