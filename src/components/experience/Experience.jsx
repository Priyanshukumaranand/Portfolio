import React from "react";
import "./experience.css";
import css3 from '../../assets/css.png'
import html from '../../assets/html.png'
import js from '../../assets/javascript.webp'
import react from '../../assets/react.png'
import django from '../../assets/django.png'
import node from '../../assets/node.png'
import postgr from '../../assets/sql.png'
import python from '../../assets/python.png'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb.png'
import bootstrap from '../../assets/bootstarp.png'

const experiences = [
  {
    id: 1,
    title: "Frontend Development",
    skills: [
      {
        id: 1,
        image: html,
        title: "HTML",
        status: "Experienced",
      }, {
        id: 2,
        image: css3,
        title: "CSS3",
        status: "Experienced",
      },
      {
        id: 3,
        image: js,
        title: "JAVASCRIPT",
        status: "Experienced",
      },
      {
        id: 4,
        image: react,
        title: "REACT & REDUX",
        status: "Experienced",
      },
      {
        id: 5,
        image: bootstrap,
        title: "Bootstrap",
        status: "Experienced",
      }
    ]

  },
  {
    id: 2,
    title: "Backend Development",
    skills: [
      {
        id: 1,
        image: node,
        title: "Node.js",
        status: "Experienced",
      }, {
        id: 2,
        image: django,
        title: "Django",
        status: "Intermediate",
      },
      {
        id: 3,
        image: python,
        title: "Python",
        status: "Experienced",
      }, {
        id: 4,
        image: express,
        title: "ExpressJS",
        status: "Experienced",
      },
      {
        id: 5,
        image: mongodb,
        title: "MongoDB",
        status: "Experienced",
      },
      {
        id: 6,
        image: postgr,
        title: "PostgreSQL",
        status: "Beginner",
      }
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        {experiences.map(({ id, title, skills }) => {
          return (
            <div key={id} className="experience_frontend">
              <h3>{title}</h3>
              <div className="experience_content">
                {skills.map(({ id, title, image, status }) => {
                  return (
                    <article key={id} className="experience_details">
                      <img src={image} className="experience_details-icon" alt="html" />
                      <div>
                        <h4>{title}</h4>
                        <small className="text-light">{status}</small>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Experience;