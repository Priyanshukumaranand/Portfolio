import React from 'react'
import { useEffect, useState } from "react";
import './portfolio.css'
import sanityClient from "../../sanityClient";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projects"]{
           id,
           title,
           github,
           demo,
           "imageUrl": image.asset->url
        }`
      )
      .then((data) => setPortfolios(data))
      .catch(console.error);
  }, []);

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          portfolios.map(({ id, imageUrl, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={imageUrl} alt={title} />
                </div>
                <h3 className='portfolio__item h3'>{title}</h3>
                <div className='portfolio__cta'>
                  <a href={github} target="_blank" className='btn' >Github</a>
                  <a href={demo} target="_blank" className='btn btn-primary' >Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
