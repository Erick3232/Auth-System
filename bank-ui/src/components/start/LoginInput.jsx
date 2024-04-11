import '../../pages/login/Login.css';
import React,{useEffect, useRef, useState} from 'react';
import { BrowserRouter as Router, Route,Routes, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export const LoginInput = () => {
  const [login, setLogin] = useState({
    login: '',
    password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:8080/auth/processLogin';
    try {
      const response = await axios.post(url, login);
      console.log("Login bem-sucedido", response.data);
    } catch (error) {
      console.error("Erro: ", error);
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value
    }));
  };
    return(
        <>
        <div style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}>
        <div className="col-sm-9 col-md-7 col-lg-6 col-xl-4 m-auto px-5">
          <div className="card border-0 shadow rounded-3 my-5 bg-light">
            <div className="card-body p-4 p-sm-5">
              <h3 className="card-title text-center mb-3 fw-light fs-3 fw-semibold">
                Login
              </h3>
              <hr className='lines'/>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Login"
                    value={login.user}
                    onChange={handleInputChange}
                    name="login"
                  />
                  <label htmlFor="floatingInput">Login</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    autoComplete="true"
                    value={login.password}
                    onChange={handleInputChange}
                    name="password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="rememberPasswordCheck"
                  >
                    Remember password
                  </label>
                </div>
                <div className="d-grid mt-4">
                  <button
                  style={{backgroundColor: "#1f1f1f", border: "1px solid #26282f"}}
                    className="btn btn-primary text-uppercase fw-semibold"
                    type="submit"
                  >
                    ENTRAR
                  </button>
                </div>
                <div style={{textAlign: "center"}}>
                <span>Don't have an account? <Link to="/register">Register</Link></span>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    </>
    )
  }