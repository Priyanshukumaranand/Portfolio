import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolioimg.png'
import IMG2 from '../../assets/EcomNext.png'
import IMG3 from '../../assets/Uchat.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/Todo.png'
import IMG6 from '../../assets/VirtualWorld.png'

const data =[
  {
    id:1,
    image:IMG1,
    title:'Portfolio(ReactJS)',
    github:'https://github.com/Priyanshukumaranand/Portfolio',
    demo:'"https://github.com/Priyanshukumaranand"',
  },
  {
    id:2,
    image:IMG2,
    title:'Ecommerce-App (NextJS)',
    github:'https://github.com/Priyanshukumaranand/Ecommerce-App',
    demo:'https://github.com/Priyanshukumaranand',
  },
  {
    id:3,
    image:IMG3,
    title:'Chat Application',
    github:'https://github.com/Priyanshukumaranand/U_chat',
    demo:'https://github.com/Priyanshukumaranand',
  },
  // {
  //   id:4,
  //   image:IMG4,
  //   title:'Ecommerce-App (MERN)',
  //   github:'https://github.com/Priyanshukumaranand/ecommerce-website',
  //   demo:'https://github.com/Priyanshukumaranand',
  // },
  {
    id:5,
    image:IMG5,
    title:'TODO List App(ReactJS)',
    github:'https://github.com/Priyanshukumaranand/Todo-list',
    demo:'https://todo-list-application-gdo4.onrender.com/',
  },
  {
    id:6,
    image:IMG6,
    title:'Virtual World(Javascript)',
    github:'https://github.com/Priyanshukumaranand',
    demo:'#',
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