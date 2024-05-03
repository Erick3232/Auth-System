import React, { useState, useEffect } from 'react';
import "../../pages/register/Register.css"
import Login from "../pages/login/index"
import { useNavigate } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios'

export const RegisterInput = () => {
    const [login, setValues] = useState({
        login: '',
        email: '',
        password: '',
        confirmPassword: '',
        document: '',
        rg: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const url = "http://localhost:8080/auth/process"
      try{
          const response = await axios.post(url, login)
          console.log("Conta registrada!", response.data)
          navigate("/login")
        } catch(error){
          console.error("Ocorreu um error ao fazer registro: ", error)
        }
    };
    return(
        <>
         <div style={{
         width: "84vw",
         height: "100vh",
         overflow: "hidden",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
      }}>
        <div className="col-sm-9 col-md-7 col-lg-6 col-xl-4 m-auto px-5">
  <div className="card border-0 shadow rounded-3 my-5 bg-light"  style={{ width: "200%", margin: "-30px"}}>
    <div className="card-body p-4 p-sm-5" style={{ width: "100%"}}>
      <h3 className="card-title text-center mb-3 fw-light fs-3 fw-semibold">
        Register
      </h3>
      <hr style={{backgroundColor: "black",border: "10px", height: "3px", width: "25%", marginLeft: "220px"}}/>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3  justify-content-center">
          <div className="col-md-6 mx-auto">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="User"
                value={login.login}
                onChange={handleInputChange}
                name="login"
                style={{ marginRight: "10px" }}
              />
              <label htmlFor="floatingInput">User</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingRG"
                placeholder="RG"
                value={login.rg}
                onChange={handleInputChange}
                name="rg"
              />
              <label htmlFor="floatingRG">RG</label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingEmail"
                placeholder="Email"
                value={login.email}
                onChange={handleInputChange}
                name="email"
                style={{ marginRight: "10px" }}
              />
              <label htmlFor="floatingEmail">Email</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingCPF"
                placeholder="CPF"
                value={login.document}
                onChange={handleInputChange}
                name="document"
              />
              <label htmlFor="floatingCPF">CPF</label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                autoComplete="true"
                value={login.password}
                onChange={handleInputChange}
                name="password"
                style={{marginRight: "10px" }}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingConfirmPassword"
                placeholder="Confrim Password"
                value={login.confirmPassword}
                onChange={handleInputChange}
                name="confirmPassword"
              />
              <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            </div>
          </div>
        </div>
        <div className="d-grid mt-4">
          <button
            className="btn btn-primary text-uppercase fw-semibold"
            type="submit"
            style={{backgroundColor: "#1f1f1f", border: "1px solid #26282f", width: "60%", marginLeft: "20%"}}
          >
            Sign in
          </button>
        </div>
        <div style={{textAlign: "center"}}>
          <span>Have an account? <Link to="/login">Login</Link></span>
        </div>
      </form>
    </div>
  </div>
</div>

</div>
    </>
    )
}