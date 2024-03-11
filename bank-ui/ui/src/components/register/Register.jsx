import React,{useState} from 'react'
import Login from '../login/Login'
import './Register.css'
import { FaUser, FaLock, FaUserCircle } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import axios from 'axios';
                                                
const Register = () => {
    const {user, setUsers} =  useState({ 
        name: '', 
        email:'', 
        password:'',
        confirmPassword:'', 
        document: '',
        rg:''});

    return (
      <div className="container">
          <form action=''>
              <h1>Sign Up</h1>

              <div className="input-box">
                  <input type='text' placeholder='Username'  required />
                  <FaUser className='icon' />
                  <input type='text' placeholder='RG' id='rg' required />
                  <FaRegAddressCard className='icon-rg' />
              </div>

              <div className="input-box">
                  <input type='text' name='email' placeholder='Email' id='email' required />
                  <MdEmail className='icon' />
                  <input type='text' placeholder='CPF/CNPJ' id='document'  required />
                  <FaUserCircle className='icon-document' />
              </div>

              <div className="input-box">
                  <input type='password' placeholder='Password' id='password' required />
                  <FaLock className='icon' />
                  <input type='password' placeholder='Confirm Password' id='confirmPassword' required />
                  <RiLockPasswordFill className='icon-confirm-password' />
              </div>
              <button type='submit'>Create new Account</button> 

              <div className="register">
                  <span>Have an account? <Link to="/login">Login</Link></span>
              </div>
              <Routes>
                  <Route path="/login" component={Login} />
              </Routes>
          </form>
      </div>
    )
}
export default Register