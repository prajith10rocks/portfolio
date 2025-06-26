import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/prajithRound.png"
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Prajith, </span>full stack developer</h1>
        <p>Hi, I’m Prajith A R — a passionate Full Stack Developer specializing in the MERN stack.<br/>
            I love building dynamic, scalable web applications and turning ideas into efficient,
             real-world solutions.
        </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor_link' offset={50} href='#contact'><p>Connect with me</p></AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero