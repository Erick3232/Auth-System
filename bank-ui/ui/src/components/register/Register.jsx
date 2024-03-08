import React,{useRef} from 'react'
import Login from '../login/Login'
import './Register.css'
import { FaUser, FaLock, FaUserCircle } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import axios from 'axios';

// Dados para enviar no corpo da solicitação
const data = {
  login: 'seu_login',
  password: 'sua_senha',
  document: 'seu_documento',
  role: 'seu_papel',
  email: 'seu_email'
};

// URL do endpoint
// Realizar a solicitação POST usando Axios
axios.post('http://localhost:8080/auth/process', {
    login : 'user',
    email : 'user@gmail.com',
    password : '123',
    document : '123.456.789-01',
    role : 'CPF'
})
.then(function (response){
    console.log(response);
})
.catch(function (error){
    console.log(error);
});
  

const Register = () => {
    return (
      <div className="container">
          <form action=''>
              <h1>Sign Up</h1>

              <div className="input-box">
                  <input type='text' placeholder='Username' required />
                  <FaUser className='icon' />
                  <input type='text' placeholder='RG' required />
                  <FaRegAddressCard className='icon-rg' />
              </div>

              <div className="input-box">
                  <input type='text' placeholder='Email' required />
                  <MdEmail className='icon' />
                  <input type='text' placeholder='CPF/CNPJ' required />
                  <FaUserCircle className='icon-document' />
              </div>

              <div className="input-box">
                  <input type='password' placeholder='Password' required />
                  <FaLock className='icon' />
                  <input type='password' placeholder='Confirm Password' required />
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