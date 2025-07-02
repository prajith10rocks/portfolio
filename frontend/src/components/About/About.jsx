import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import prajith from  "../../assets/prajith.jpg"

export const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about_title">
            <h1>About</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about_sections">
            <div className="about_left">
                <img src={prajith} alt="" />
            </div>
            <div className="about_right">
                <div className="about_para">
                    <p> Iam a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I enjoy building responsive, scalable web applications and exploring new technologies.</p>
                    <p className='second'>With a strong foundation in both frontend and backend development, I aim to create seamless digital experiences and smart solutions that solve real-world problems. Currently expanding my skills into mobile app development with React Native.</p>
                </div>
                <div className="about_skills">
                    <div className="about_skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                    <div className="about_skill"><p>REACT JS</p><hr style={{width: "75%"}}/></div>
                    <div className="about_skill"><p>JAVASCRIPT</p><hr style={{width: "50%"}}/></div>
                    <div className="about_skill"><p>NODE JS & EXPRESS</p><hr style={{width: "80%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}
