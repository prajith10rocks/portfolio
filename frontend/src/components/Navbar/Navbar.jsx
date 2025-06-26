import React, {useRef, useState} from 'react'
import "./Navbar.css"
import logo from "../../assets/PRAJITH.svg"
import nav_underline from "../../assets/nav_underline.svg"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-650px"
  }


  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt=""/>
        <IoMenu  onClick={openMenu} className='nav_open'/>

        <ul ref={menuRef} className="nav-menu">
            <IoClose onClick={closeMenu} className="nav_close" />
            <li onClick={() => setMenu("home")}><AnchorLink className='anchor_link' href='#home'><p>Home</p></AnchorLink>{menu === "home" ? <img src={nav_underline} /> : <></>}</li>
            <li onClick={() => setMenu("about")}><AnchorLink className='anchor_link' offset={50} href='#about'><p>About Me</p></AnchorLink>{menu === "about" ? <img src={nav_underline} alt="" /> : <></>}</li>
            <li onClick={() => setMenu("services")}><AnchorLink className='anchor_link' offset={50} href='#services'><p>Services</p></AnchorLink>{menu === "services" ? <img src={nav_underline} alt="" /> : <></>}</li>
            <li onClick={() => setMenu("work")}><AnchorLink className='anchor_link' offset={50} href='#work'><p>Portfolio</p></AnchorLink>{menu === "work" ? <img src={nav_underline} alt="" /> : <></>}</li>
            <li onClick={() => setMenu("contact")}><AnchorLink className='anchor_link' offset={50} href='#contact'><p>Contact</p></AnchorLink>{menu === "contact" ? <img src={nav_underline} alt="" /> : <></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor_link' offset={50} href='#contact'><p>Connect with me</p></AnchorLink></div>
    </div>
  )
}

export default Navbar