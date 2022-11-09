import "./login.css";
import {useRef,useContext} from "react";
import Axios from "axios"
import { Context } from "../../context/Context";




export default function Login() {
  const emailRef=useRef();
  const passwordRef=useRef();

  const { dispatch, isFetching} = useContext(Context);

      const loginHandler=async (e)=>{
        e.preventDefault();

        dispatch({type:"LOGIN_START"});

        try{
                const res= await Axios.post('https://test-test-xenon.herokuapp.com/api/users/login',{
                  email:emailRef.current.value,
                  password:passwordRef.current.value
                });
                dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        }catch(err){
          dispatch({type:"LOGIN_FAILURE"})
        }
      }


console.log(isFetching);


 const goToRegister =()=>{
  window.location.href = '/register'
 }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={loginHandler}>
        <label className="loginlabel">Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." ref={emailRef}/>
        <label className="loginlabel">Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef} />
        <button className="loginButton btn btn-outline-secondary">Login</button>
      </form>
        <button className="loginRegisterButton btn btn-outline-secondary" onClick={goToRegister} disabled={isFetching}>Register</button>
    </div>
  );
}
