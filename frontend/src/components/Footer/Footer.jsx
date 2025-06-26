import React from 'react'
import "./Footer.css"
import logo from "../../assets/PRAJITH.svg"
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_top">
            <div className="footer_top_left">
                <img src={logo} alt="" />
                <p className='p'>lorem ipsum lorem ipsum</p>
            </div>
            <div className="footer_top_right">
                <div className="footer_email">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer_subscribe">Subscribe</div>
            </div>
        </div>          
        <hr  style={{width: "100%"}}/>
        <div className="footer_bottom">
            <p className="footer_bottom_left">@2025 Prajith A R. All rights reserved.</p>
            <div className="footer_bottom_right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer