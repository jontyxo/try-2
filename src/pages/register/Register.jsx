import "./register.css"
import {useRef,useState} from "react"
import Axios from "axios";
import axios from "axios";


export default function Register() {
  const usernameRef=useRef();
  const emailRef=useRef();
  const passwordRef=useRef();
  const [err,setErr] =useState(false);
  const errmessage=()=>{
setErr(true);
  }

 const registerHandler=(e)=>{
  e.preventDefault();
  
   axios.post('https://test-test-xenon.herokuapp.com/api/users/register',{
     name:usernameRef.current.value,
     email:emailRef.current.value,
     password:passwordRef.current.value
   }).then(()=>{
    window.location.href = '/login'
   }).catch(errmessage)
 }
  
 const goToLogin=()=>{
  window.location.href = '/login'
 }



    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={registerHandler}>
        <label className="registerlabel">Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." ref={usernameRef} />
        <label className="registerlabel">Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." ref={emailRef} />
        <label className="registerlabel">Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." ref={passwordRef} />
        <button className="registerButton btn btn-outline-secondary">Register</button>
      </form>
        <button className="registerLoginButton btn btn-outline-secondary" onClick={goToLogin}>Login</button>
        {err && <span>Something went wrong!</span>}
    </div>
    )
}
