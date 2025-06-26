import React from 'react'
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"


const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "03d2d9db-858c-4b4f-9ba0-47d502229924");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message)
    }
  };

  return (
    <div className='contact' id='contact'>
        <div className="contact_title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact_section">
            <div className="contact_left">
                <h1>Let's talk</h1>
                <p>I,m currently available to take on new projects, so feel free to send  me a message about anything you want...</p>
                <div className="contact_details">
                    <div className="contact_detail">
                        <img src={mail_icon} alt="" /><p>prajithradhakrishnanar123@gmail.com</p>
                    </div>
                    <div className="contact_detail">
                        <img src={call_icon} alt="" /><p>984759412</p>
                    </div>
                    <div className="contact_detail">
                        <img src={location_icon} alt="" /><p>Palakkad, Kerala</p>
                    </div>
                </div>
            </div>

            <form onSubmit={onSubmit} className="contact_right">
                <label htmlFor="">Your Name</label>
                <input type="text"  placeholder='Enter  your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write ur message here!!</label>
                <textarea name="msg" rows='8' placeholder='Enter your message '></textarea>
                <button className='contact_submit' type='submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact