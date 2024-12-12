// filepath: src/components/experience/Experience.jsx
import React, { useEffect, useState } from "react";
import "./experience.css";
import sanityClient from "../../sanityClient";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skills"]{
          title,
          skills[]{
            title,
            status,
            "imageUrl": image.asset->url
          }
        }`
      )
      .then((data) => setExperiences(data))
      .catch(console.error);
  }, []);

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        {experiences.map(({ title, skills }, index) => (
          <div key={index} className="experience_frontend">
            <h3>{title}</h3>
            <div className="experience_content">
              {skills.map(({ title, imageUrl, status }, skillIndex) => (
                <article key={skillIndex} className="experience_details">
                  <img src={imageUrl} className="experience_details-icon" alt={title} />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{status}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;