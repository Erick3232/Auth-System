import React, { useState } from 'react';
import './Register.css';
import Login from '../login/Login'
import { FaUser, FaLock, FaUserCircle } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const { login, email, password, confirmPassword, document, rg } = values;

        // Verifica se todos os campos estão preenchidos
        if (login && email && password && confirmPassword && document && rg) {
            axios.post('http://localhost:8080/auth/process', {
                login: login,
                email: email,
                password: password,
                document: document,
                role: 'CPF' // Define o papel aqui ou altera a lógica conforme necessário
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.error('Erro ao enviar dados:', error);
                });
                setValid(true);
        }
        setSubmitted(true);
    };

    return (
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
                    <span>Have an account? <Link to="/login">Login</Link></span>
                </div>

                <Routes>
                    <Route path="/login" component={Login} />
                </Routes>
            </form>
        </div>
    );
};

export default Register;
