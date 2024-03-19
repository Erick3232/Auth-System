import React, { useState, useEffect } from 'react';
import './Register.css';
import Login from "../login";
import logo from '../login/logo.png'
import { FaUser, FaLock, FaUserCircle } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [values, setValues] = useState({
        login: '',
        email: '',
        password: '',
        confirmPassword: '',
        document: '',
        rg: ''
    });
    const[mensagem, setMensagens] = useState('');
    const history = useNavigate();

    useEffect(() => {
        let timer;
        if (mensagem) {
            timer = setTimeout(() => {
                setMensagens('');
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [mensagem]);

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

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
        const { login, email, password, confirmPassword, document, rg } = values;

        if(password !== confirmPassword){
            setMensagens("As senhas não são iguais")
        } else if(login.trim() === '' || email.trim() === '' || document.trim() === ''){
            setMensagens("Preencha todos os campos")
        } else if(rg.trim() === '' || document.trim() === ''){
            setMensagens("Documento inválido")
        } 

        if (login && email && password && confirmPassword && document && rg) {

            try{
                const response = await axios.post('http://localhost:8080/auth/process', {
                    login: login,
                    email: email,
                    password: password,
                    document: document,
                    role: 'CPF',
                    rg: rg
                });
                console.log(response);
                setMensagens('Conta criada com sucesso!');
                history('/login');
            } catch(error) {
                console.error('Erro ao enviar dados:', error);
            }

        }
        setSubmitted(true);
    };

    return (
        <div>
            <img src={logo} alt="" className='logo'/>
        <div className="container">
            <form onSubmit={handleSubmit}>
                {submitted && valid && (
                    <div className="success-message">
                        <h3>
                            {" "}
                            Welcome {Login} {" "}
                        </h3>
                        <div> Your registration was successful! </div>
                    </div>
                )}
                <h1>Sign Up</h1>

                <div className="input-box">
                    <input type='text' placeholder='Username' name='login' value={values.login} onChange={handleInputChange} required />
                    <FaUser className='icon' />
                    <input type='text' placeholder='RG' name='rg' value={values.rg} onChange={handleInputChange} required />
                    <FaRegAddressCard className='icon-rg' />
                </div>

                <div className="input-box">
                    <input type='text' placeholder='Email' name='email' value={values.email} onChange={handleInputChange} required />
                    <MdEmail className='icon' />
                    <input type='text' placeholder='CPF/CNPJ' name='document' value={values.document} onChange={handleInputChange} required />
                    <FaUserCircle className='icon-document' />
                </div>

                <div className="input-box">
                    <input type='password' placeholder='Password' name='password' value={values.password} onChange={handleInputChange} required />
                    <FaLock className='icon' />
                    <input type='password' placeholder='Confirm Password' name='confirmPassword' value={values.confirmPassword} onChange={handleInputChange} required />
                    <RiLockPasswordFill className='icon-confirm-password' />
                </div>
                <button type='submit'>Create new Account</button>
                <div className="register">
                    <span>Have an account? <Link to="/">Login</Link></span>
                </div>
            </form>
        </div>
        <div className='alertMessage'>
        {mensagem && <p>{mensagem}</p>}
        </div>
        </div>
    );
};

export default Register;