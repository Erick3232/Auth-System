import { useState } from "react";
import axios from 'axios'
import { BrowserRouter as useNavigate } from 'react-router-dom';


export default function App(){
    const[values, setValues] = useState({
        login: '',
        password: ''
    });
};
const data = {
    login: 'seu_login',
    password: 'seu_password'
};

const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
};
const [submitted, setSubmitted] = useState(false);
const [valid, setValid] = useState(false);
const history = useNavigate();
const[mensagem, setMensagens] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    if(data){
        setValid(true);

    axios.post('http://localhost:8080/auth/processLogin', {
        login: data.login,
        password: data.password,
    })
    .then(function (response) {
        console.log(response);
        setMensagens("Entrada bem-sucedida!")
        history('/dashboard')
    });
    }
    setSubmitted(true);
};