"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import sanityClient from "@/lib/sanity";

const Header = () => {
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "profilePic"]{
          "imageUrl": image.asset->url
        }`
      )
      .then((data) => setProfilePic(data[0]?.imageUrl))
      .catch(console.error);
  }, []);

  return (
    <header id="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Priyanshu Kumar Anand</h1>
        <h5 className="text-light"> Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        {profilePic && <img src={profilePic} alt="me" className="me" />}
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
