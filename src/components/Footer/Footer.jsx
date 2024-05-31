/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import { FaDiscord, FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Priyanshu</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>        
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/priyanshu-kumar-anand-52b29825a" ><FaLinkedin /></a>
        <a href="https://github.com/Priyanshukumaranand"><FaGithub /></a>
        <a href="https://discord.com/users/1070009697605800088"><FaDiscord /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Priyanshu Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer