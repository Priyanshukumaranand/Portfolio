import React from "react";
import "./experience.css";
import css3 from '../../assets/css.png'
import html from '../../assets/html.png'
import js from '../../assets/javascript.webp'
import react from '../../assets/react.png'
// import wp from '../../assets/avatar2.jpg'
import django from '../../assets/django.png'
import node from '../../assets/node.png'
import postgr from '../../assets/sql.png'
import python from '../../assets/python.png'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb.png'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={html} className="experience_details-icon" alt="html" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={css3} className="experience_details-icon" alt="css" />
              <div>

                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={react} className="experience_details-icon" alt="react" />
              <div>
                <h4>REACT & REDUX</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">

          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={postgr} className="experience_details-icon" alt="postgresql" />
              <div>

                <h4>PostgreSQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={mongodb} className="experience_details-icon" alt="ruby" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={express} className="experience_details-icon" alt="rails" />
              <div>

                <h4>ExpressJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={python} className="experience_details-icon" alt="python" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={django} className="experience_details-icon" alt="python" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={node} className="experience_details-icon" alt="node" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;