import '../../pages/login/Login.css';
import React,{useRef, useState} from 'react';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Register from "../../pages/register/index";
import { BrowserRouter as Router, Route,Routes, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export const LoginInput = () => {
    
    const [backgroundColor, setBackgroundColor] = useState('')
    const history = useNavigate();
    const[mensagem, setMensagem] = useState('')

    const [values, setValues] = useState({
        login: '',
        password: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {login, password} = values;

        if(login && password){
            try{
                const response = await axios.post('http://localhost:8080/auth/processLogin', {
                    login: login,
                    password: password
                });
                setBackgroundColor("#117f09")
                setMensagem("Entrada com sucesso!")

                setTimeout(() => {
                    setMensagem('');
                    history('/menu'); 
                }, 2000);
            }catch(error){
                setBackgroundColor("#aa0401")
                setMensagem("Usuário ou senha incorreta!")

                setTimeout(() => {
                    setMensagem('');
                    setBackgroundColor('')
                }, 5000);
                console.error("Erro: ", error)
            }
        }
    }
    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };
    return(
        <>
        <div className='wrapper'>
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
        <div className='message' style={{ backgroundColor: backgroundColor }}>
        <p className={setMensagem ? 'show' : 'hide'}>{mensagem}</p>
        </div>
    </>
    )
}
