import React from 'react'
import "./MyWork.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import works from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div className='mywork' id='work'>
        <div className="work_title">
            <h1>My Works</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="work_container">
            {works.map((work, index) => {
              return <div className="work_format" key={index}>
                  <img src={work.w_img}  alt="" />
                  <div className="work_options">
                      <div className="demo">Demo</div>
                      <div className="code">Code</div>
                  </div>
              </div>
            })}
        </div>
    </div>
  )
}

export default MyWork