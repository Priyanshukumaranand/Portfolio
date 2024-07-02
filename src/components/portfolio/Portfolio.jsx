import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolioimg.png'
import IMG2 from '../../assets/EcomNext.png'
import IMG3 from '../../assets/Uchat.jpg'
import IMG4 from '../../assets/NFT.png'
import IMG5 from '../../assets/Todo.png'
import IMG6 from '../../assets/SOP.png'
import IMG7 from '../../assets/Chat_web.png'
import IMG8 from '../../assets/cebootcamp.png' 

const data =[
  {
    id:1,
    image:IMG1,
    title:'Portfolio(ReactJS)',
    github:'https://github.com/Priyanshukumaranand/Portfolio',
    demo:'"https://github.com/Priyanshukumaranand"',
  },
  {
    id:8,
    image:IMG8,
    title:'CE Bootcamp Backend',
    github:'https://github.com/Priyanshukumaranand/ce_bootcamp_ejs',
    demo:'"https://github.com/Priyanshukumaranand/ce_bootcamp_ejs"',
  },
  {
    id:7,
    image:IMG7,
    title:'React Chat App',
    github:'https://github.com/Priyanshukumaranand/Chat-App-web',
    demo:'"https://github.com/Priyanshukumaranand/Chat-App-web"',
  },
  {
    id:3,
    image:IMG3,
    title:'Chat Application',
    github:'https://github.com/Priyanshukumaranand/U_chat',
    demo:'https://github.com/Priyanshukumaranand',
  },
  {
    id:4,
    image:IMG4,
    title:'NFT website',
    github:'https://github.com/Priyanshukumaranand/NFT_website.git',
    demo:'https://github.com/Priyanshukumaranand',
  },
  {
    id:2,
    image:IMG2,
    title:'Ecommerce-App (NextJS)',
    github:'https://github.com/Priyanshukumaranand/Ecommerce-App',
    demo:'https://github.com/Priyanshukumaranand',
  },
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
    title:'SOP for user awareness',
    github:'https://github.com/Priyanshukumaranand/White_Hackers.git',
    demo:'https://priyanshukumaranand.github.io/White_Hackers/',
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