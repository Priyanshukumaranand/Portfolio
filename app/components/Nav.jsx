/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import React from "react";
import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[2] flex gap-3.5 
                                        backdrop-blur-[15px] bg-black/30 w-max px-7 py-3 rounded-[3rem]">
            <a href="#" 
                 onClick={() => setActiveNav('#')} 
                 className={`p-3.5 rounded-full flex text-[var(--color-light)] text-[1.1rem] 
                                        hover:bg-black/30 transition-colors
                                        ${activeNav === '#' ? 'bg-[var(--color-primary)] text-[var(--color-bg)]' : 'bg-transparent'}`}>
                <AiOutlineHome />
            </a>
            <a href="#about" 
                 onClick={() => setActiveNav('#about')} 
                 className={`p-3.5 rounded-full flex text-[var(--color-light)] text-[1.1rem] 
                                        hover:bg-black/30 transition-colors
                                        ${activeNav === '#about' ? 'bg-[var(--color-primary)] text-[var(--color-bg)]' : 'bg-transparent'}`}>
                <AiOutlineUser />
            </a>
            <a href="#experience" 
                 onClick={() => setActiveNav('#experience')} 
                 className={`p-3.5 rounded-full flex text-[var(--color-light)] text-[1.1rem] 
                                        hover:bg-black/30 transition-colors
                                        ${activeNav === '#experience' ? 'bg-[var(--color-primary)] text-[var(--color-bg)]' : 'bg-transparent'}`}>
                <BiBook/>
            </a>      
            <a href="#portfolio" 
                 onClick={() => setActiveNav('#portfolio')} 
                 className={`p-3.5 rounded-full flex text-[var(--color-light)] text-[1.1rem] 
                                        hover:bg-black/30 transition-colors
                                        ${activeNav === '#portfolio' ? 'bg-[var(--color-primary)] text-[var(--color-bg)]' : 'bg-transparent'}`}>
                <RiServerLine />
            </a>
            <a href="#contact" 
                 onClick={() => setActiveNav('#contact')} 
                 className={`p-3.5 rounded-full flex text-[var(--color-light)] text-[1.1rem] 
                                        hover:bg-black/30 transition-colors
                                        ${activeNav === '#contact' ? 'bg-[var(--color-primary)] text-[var(--color-bg)]' : 'bg-transparent'}`}>
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Nav;