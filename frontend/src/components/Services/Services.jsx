import React from 'react'
import "./Services.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import sd from "../../assets/services_data"
import arrow_icon from "../../assets/arrow_icon.svg"

const Services = () => {
  return (
    <div className='services' id='services'>
     <div className="services_title">
      <h1>My Services</h1>
      <img src={theme_pattern} alt="" />
     </div>
     <div className="services_container">
      {sd.map((service, index) => {
        return <div className='services_format' key={index}>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className='services_readmore'>
              <p>Read More</p>
              <img src={arrow_icon} alt="" />
            </div>
        </div>
      })}
     </div>
    </div>
  )
}

export default Services