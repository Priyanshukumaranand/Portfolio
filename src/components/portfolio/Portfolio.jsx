import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
  {
    id:1,
    image:IMG1,
    title:'img1',
    github:'"https://github.com/Priyanshukumaranand"',
    demo:'"https://github.com/Priyanshukumaranand"',
  },
  {
    id:2,
    image:IMG2,
    title:'img1',
    github:'https://github.com/Priyanshukumaranand',
    demo:'https://github.com/Priyanshukumaranand',
  },
  {
    id:3,
    image:IMG3,
    title:'img1',
    github:'https://github.com/Priyanshukumaranand',
    demo:'https://github.com/Priyanshukumaranand',
  },
  {
    id:4,
    image:IMG4,
    title:'img1',
    github:'https://github.com/Priyanshukumaranand',
    demo:'https://github.com/Priyanshukumaranand',
  },
  {
    id:5,
    image:IMG5,
    title:'img1',
    github:'https://github.com/Priyanshukumaranand',
    demo:'https://github.com/Priyanshukumaranand',
  },
  {
    id:6,
    image:IMG6,
    title:'img1',
    github:'https://github.com/Priyanshukumaranand',
    demo:'https://github.com/Priyanshukumaranand',
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
       {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3 className='portfolio__item h3'>{title}</h3>
            <div className='portfolio__cta'>
              <a href={github} target="_blank" className='btn' >Github</a>
              <a href={demo} target="_blank" className='btn btn-primary'>Live Demo</a>
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