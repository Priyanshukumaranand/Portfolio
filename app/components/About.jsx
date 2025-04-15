'use client';
import React from "react";
import "@/styles/about.css";
import Image from 'next/image';
import Me from "@/public/code.jpg";
import { FaAward, FaCertificate, FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h5>Hello I'm</h5>
      <h2>Priyanshu Kumar Anand</h2>
      <h2 className="text-light"> Full-stack Developer</h2>
     
      <div className="container about_container">
        <div className="about_me">
            <Image src={Me} alt="About me" className="about_me-image" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon mx-auto" />
              <h5>Experience</h5>
              <small>2 Years in Web Dev</small>
            </article>
            <article className="about_card">
              <FaCertificate className="about_icon mx-auto" />
              <h5>Certificates</h5>
              <small>7+</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon mx-auto" />
              <h5>Projects</h5>
              <small>6+ projects completed</small>
            </article>
          </div>
          <p>Hello, I'm Priyanshu, a passionate and versatile Full Stack Web Developer with a strong foundation in Data Structures and Algorithms (DSA). My journey in web development has been driven by a deep-seated curiosity and a desire to create seamless, efficient, and user-friendly web applications.
            <br />
            <br />
            I'm open to Full-stack(remote/onsite) opportunities with a passion of Full Stack development.
            If you're interested in working together or just want to connect, feel free to reach out to me.
          </p>
          <a href="#portfolio" className="btn btn-primary"> See my projects</a>
        </div>
      </div>
    </section>
  );
};

export default About;