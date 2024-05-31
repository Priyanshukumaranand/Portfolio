import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/man.webp"

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Priyanshu Kumar Anand</h1>
        <h5 className="text-light"> Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <img src={ME} alt="me" className="me"/>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;