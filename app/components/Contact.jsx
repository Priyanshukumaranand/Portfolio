'use client';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '@/styles/contact.css'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.NEXT_APP_SERVICE_KEY, process.env.NEXT_APP_TEMPLATE_KEY, form.current, process.env.REACT_APP_API_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdEmail className='contact_option-icon mx-auto' />
            <h4>Email</h4>
            <h5 id='email'>priyanshukumaranandofficial@gmail.com</h5>
            <a href="mailto:priyanshukumaranandofficial@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='contact_option'>
            <FaLinkedin className='contact_option-icon mx-auto' />
            <h4>LinkedIn</h4>
            <h5>Priyanshu Kumar Anand</h5>
            <a href='https://www.linkedin.com/in/priyanshu-kumar-anand-52b29825a' target="_blank" rel="noreferrer">Send a message</a>

          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder="Type your message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact