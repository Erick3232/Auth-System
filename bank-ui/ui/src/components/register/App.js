import { useState } from "react";
import axios from 'axios';

export default function App() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        document: '',
        rg: ''
    });
};

const data = {
    login: 'seu_login',
    password: 'sua_senha',
    document: 'seu_documento',
    role: 'seu_papel',
    email: 'seu_email'
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

const handleSubmit = (e) => {
    e.preventDefault();
    if(data){
        setValid(true);

    axios.post('http://localhost:8080/auth/process', {
        login: data.login,
        email: data.email,
        password: data.password,
        document: data.document,
        role: data.role
    })
    .then(function (response) {
        console.log(response);
    });

    }
    setSubmitted(true);
};

