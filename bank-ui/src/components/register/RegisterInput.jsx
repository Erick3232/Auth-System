import React, { useState } from 'react';
import "../../account/register/Register.css"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import { handleInputChange, handleSubmit } from './formRegisterHandlers';

export const RegisterInput = () => {
  const [data, setValues] = useState({
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
    document: '',
    rg: ''
  });
  const navigate = useNavigate();


  return (
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
          <div className="card border-0 shadow rounded-3 my-5 bg-light" style={{ width: "200%", margin: "-30px" }}>
            <div className="card-body p-4 p-sm-5" style={{ width: "100%" }}>
              <h3 className="card-title text-center mb-3 fw-light fs-3 fw-semibold">
                Register
              </h3>
              <hr style={{ backgroundColor: "black", border: "10px", height: "3px", width: "25%", marginLeft: "185px" }} />
              <form onSubmit={(event) => handleSubmit(event, data, navigate)}>
                <div className="row mb-3  justify-content-center">
                  <div className="col-md-6 mx-auto">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="User"
                        value={data.login}
                        onChange={(event) => handleInputChange(event, setValues)}
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
                        value={data.rg}
                        maxLength={12}
                        onChange={(event) => handleInputChange(event, setValues)}
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
                        value={data.email}
                        onChange={(event) => handleInputChange(event, setValues)}
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
                        value={data.document}
                        maxLength={14}
                        onChange={(event) => handleInputChange(event, setValues)}
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
                        value={data.password}
                        onChange={(event) => handleInputChange(event, setValues)}
                        name="password"
                        style={{ marginRight: "10px" }}
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
                        value={data.confirmPassword}
                        onChange={(event) => handleInputChange(event, setValues)}
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
                    style={{ backgroundColor: "#1f1f1f", border: "1px solid #26282f", width: "60%", marginLeft: "20%" }}
                  >
                    Sign in
                  </button>
                </div>
                <div style={{ textAlign: "center" }}>
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