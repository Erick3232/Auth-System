import React,{useRef} from 'react';
import './Login.css';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Register from '../register/Register'; 
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="wrapper">
        <form action=''>
            <h1>Login</h1>
            <div className="input-boxx">
                <input type='text' placeholder='Email' required />
                <MdEmail className='icon-name' />
            </div>
            <div className="input-boxx">
                <input type='password' placeholder='Password' required />
                <FaLock className='icon-password' />
            </div>

            <div className="forgot">
                <a href="#">Forgot Password?</a>
            </div>

            <button type='submit'>Entrar</button>

            <div className="register">
                <span>Don't have an account? <Link to="/register">Register</Link></span>
            </div>
            <Routes>
                <Route path="/register" component={Register} />
            </Routes>
        </form>
    </div>
  );
};

export default Login;