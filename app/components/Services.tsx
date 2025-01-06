'use client';
import React from "react";
import "@/styles/services.css";
import { BiCheck } from "react-icons/bi";
const services = [
  {
    id: 1,
    title: "Front-end Creation",
    p: ["I build front-end websites and mobile applications", "I optimize applications for maximum speed.", "I collaborate with back-end developers and web designers to improve usability."]
  },
  {
    id: 2,
    title: "Web Development",
    p: ["I build web apps using React, MongoDb and Express", "I create Ecommerce Applications", "QA and Tests"]
  },
  {
    id: 3,
    title: "UI/UX Design",
    p: ["I improve user interaction  and customer satisfaction", "I help to boost business growth by improving application runtime speed"]
  }
]
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        {services.map(({ id, title, p }) => {
          return (
            <article key={id} className="services">
              <div className="service_head">
                <h3>{title}</h3>
              </div>
              <ul className="service_list">
              {p.map((pg, index) => (
                <li key={index}>
                  <BiCheck className="service_list-icon" />
                  <p>{pg}</p>
                </li>
              ))}
              </ul>
            </article>)
        })}
      </div>
    </section>
  );
};

export default Services;