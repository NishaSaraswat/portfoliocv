import React from "react";
import Card from '../Projects/Cards'
import classes from "../Projects/Projects.module.css";
import project1 from '../../Images/project1.png'
import project2 from '../../Images/project2.png'
import project3 from '../../Images/project3.png'
import project4 from '../../Images/project4.png'
import project5 from '../../Images/project5.png'
import project6 from '../../Images/project6.jpg'


function Projects(props) {
  return (
   <>
    <div className="projects component__space" id="Projects">
      <div className={classes.Heading}>
        <h1 className={classes.Heading}>My projects</h1>
        <p className="p__color">
         Here are some of my projects!🙂
        </p>
        <p className="p__color">Last two projects might not work online so Please check the githubLink,if not it will be live soon!</p>
      </div>
      <div className="container">
          <div className="row">
            {/* Individual projects */}
          <div className = "col__3">
              <div className={classes.ProjectBox}>
                <Card img={project1} title="A website for dog daycare" description="Only Html and CSS" liveLink="https://nishasaraswat.github.io/Gruppupgift1/" githubLink="https://github.com/NishaSaraswat/Gruppupgift1"/>
              </div>
            </div>
            <div className="col__3">
              <div className={classes.ProjectBox}>
                <Card img={project2} title="The-Cook-Book" description="A web application (API, Ajax, Javascript, HTML & CSS)." liveLink="https://nishasaraswat.github.io/The-Cook-Book/" githubLink="https://github.com/NishaSaraswat/The-Cook-Book"/>
              </div>
            </div>
            <div className="col__3">
              <div className={classes.ProjectBox}>
                <Card img={project3} title="ToDoList" description="A simpel ToDoList in Javascript" liveLink="https://nishasaraswat.github.io/ToDoList/" githubLink="https://github.com/NishaSaraswat/ToDoList"/>
              </div>
            </div>
            <div className="col__3">
              <div className={classes.ProjectBox}>
                <Card img={project4} title="Movie Search App" description="A simple movie search app using OMBD API"
                  liveLink = "https://myreactmovies.netlify.app/"
                githubLink = "https://github.com/NishaSaraswat/ReactApp"
                />
              </div>
            </div>
               {/* Group projects */}
          <div className="col__3">
            <div className={classes.ProjectBox}>
                <Card img={project6} title="The Shoe Shop"
                  description="Online shoeshop- learning production-build"
                  liveLink = '../../ErrorPage'
                  githubLink = "https://github.com/NishaSaraswat/ProjectLeverans"
                  />
              </div>
            </div>
          <div className="col__3">
              <div className={classes.ProjectBox}>
                <Card img={project5} title="Photonic" description="A photo chat app built in react, javascript, mongoDB (Mongoosy) and Nodejs"
                  liveLink = '../../ErrorPage'
                   githubLink = "https://github.com/NishaSaraswat/Photonic"
                />
              </div>
          </div>

        </div>
      </div>
      </div>
    </>
  )
}

export default Projects
