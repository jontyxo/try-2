import "./contact.css"
import Axios from "axios";
import {useRef} from "react";

import React from 'react'

function Contact() {
  const nameRef=useRef();
  const emailRef=useRef();
  const descRef=useRef();

  const handleSubmit=(e) =>{
    e.preventDefault();
   
    Axios.post('https://test-test-xenon.herokuapp.com/api/contactform',{
                  name:nameRef.current.value,
                  email:emailRef.current.value,
                  desc:descRef.current.value
                })
  }
  

  return (
    <div>
      <div className="contactHeader">Hey!! Fill the Form to get in touch with us</div>
      <div className="contactUs">
    
      <form className="contactform" onSubmit={handleSubmit}>
        <label className="labelcontact">Your Name</label>
        <input className="loginInput" type="text" placeholder="Enter your Name.." ref={nameRef}/>
        <label className="labelcontact">Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." ref={emailRef}/>
        <label className="labelcontact">Car Description</label>
        <textarea className="loginInput" type="text" placeholder="Your Car Desc.." ref={descRef} rows="3" cols="35"/>
        <button className="loginButton">Submit</button>
      </form>
       
    </div>
    </div>
  )
}

export default Contact;