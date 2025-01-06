'use client';
import React from 'react'
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
      <div className='header_socials'>
          <a href="https://www.linkedin.com/in/priyanshu-kumar-anand-52b29825a" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Priyanshukumaranand" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://discord.com/users/1070009697605800088" target="_blank" rel="noreferrer"><FaDiscord /></a>
    </div>
  )
}

export default HeaderSocials 