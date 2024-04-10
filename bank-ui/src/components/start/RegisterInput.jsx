import React, { useState, useEffect } from 'react';
import "../../pages/register/Register.css"
import Login from "../../pages/login/index"
import { useNavigate } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios'

export const RegisterInput = () => {
  const url = "http://localhost:8080/auth/process"
    const [login, setValues] = useState({
        login: '',
        email: '',
        password: '',
        confirmPassword: '',
        document: '',
        rg: ''
    });
    const navigate = useNavigate();
    const [valid, invalid] = useState("d-none");

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try{
          const response = await axios.get(url, {
            user: login.login,
            email: login.email,
            password: login.password,
            confirmPassword: login.confirmPassword,
            document: login.document,
            rg: login.rg
          })
          if(response.data.sucess){
            navigate('/login')
          } else {
            invalid("d-block")
          }
        } catch(error){
          console.error("Ocorreu um error ao fazer login: ", error)
        }
    };
    return(
        <>
         <div style={{
        width: "84vw",
        height: "80vh",
        overflow: "hidden",
      }}>
        <div className="col-sm-9 col-md-7 col-lg-6 col-xl-4 m-auto px-5">
  <div className="card border-0 shadow rounded-3 my-5 bg-light"  style={{ width: "180%"}}>
    <div className="card-body p-4 p-sm-5" style={{ width: "90%", marginRight: "20px", margin: "auto"}}>
      <h3 className="card-title text-center mb-3 fw-light fs-3 fw-semibold">
        Register
      </h3>
      <hr style={{backgroundColor: "black",border: "10px", height: "3px", width: "25%", marginLeft: "165px"}}/>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="User"
                value={login.userId}
                onChange={handleInputChange}
                name="userId"
                style={{ width: "120%"}}
              />
              <label htmlFor="floatingInput">User</label>
            </div>
          </div>
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
                style={{ width: "120%" }}
              />
              <label htmlFor="floatingPassword">Password</label>
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
                placeholder="Confirm Password"
                autoComplete="true"
                value={login.password}
                onChange={handleInputChange}
                name="password"
                style={{ width: "120%" }}
              />
              <label htmlFor="floatingPassword">Confirm Password</label>
            </div>
          </div>
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
                style={{ width: "120%" }}
              />
              <label htmlFor="floatingPassword">Email</label>
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
                style={{ width: "120%" }}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>
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
                style={{ width: "120%" }}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>
        </div>
        <p className={`text-danger fw-semibold ms-2 ${invalid}`}>
          Invalid ID or PIN
        </p>
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
            className="btn btn-primary text-uppercase fw-semibold"
            type="button"
            style={{backgroundColor: "#1f1f1f", border: "1px solid #26282f"}}
            onClick={handleSubmit}
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