import React,{useRef, useState} from 'react';
import './Login.css';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Register from "../register";
import { BrowserRouter as Router, Route,Routes, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [values, setValues] = useState({
        login: '',
        password: ''
    })
    const history = useNavigate();
    const[mensagem, setMensagens] = useState('')

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {login, password} = values;

        if(login && password){
            try{
                const response = await axios.post('http://localhost:8080/auth/processLogin', {
                    login: login,
                    password: password
                });
                console.log(response)
                setMensagens('Entrada bem-sucedida!')
                history('/menu');
            }catch(error){
                setMensagens("Usuário ou Senha inválida")
                console.error("Erro: ", error)
            }
        }
    }
  return (
    <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-boxx">
                <input type='text' placeholder='Username' value={values.login} name='login' onChange={handleInputChange} required />
                <MdEmail className='icon-name' />
            </div>
            <div className="input-boxx">
                <input type='password' value={values.password} placeholder='Password' name='password' onChange={handleInputChange} required />
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