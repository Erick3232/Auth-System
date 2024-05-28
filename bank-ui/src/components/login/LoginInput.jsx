import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleInputChange, handleSubmit } from './formLoginHandler';

export const LoginInput = () => {
  const [data, setValues] = useState({
    login: '',
    password: ''
  });
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState(null);

  return (
    <>
      <div style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        height: "100vh",
        overflow: "hidden",
      }}>
        <div className="col-sm-9 col-md-7 col-lg-6 col-xl-4 m-auto px-5">
          {mensagem && ( //exibir mensagem de erro no login
            <div className="alert alert-danger" role="alert" style={{textAlign: "center"}}>
              {mensagem}
            </div>
          )}
          <div className="card border-0 shadow rounded-3 my-5 bg-light">
            <div className="card-body p-4 p-sm-5" style={{ alignItems: 'center', justifyContent: 'center' }}>
              <h3 className="card-title text-center mb-3 fw-light fs-3 fw-semibold">
                Login
              </h3>
              <hr style={{ backgroundColor: "black", border: "10px", height: "3px", width: "25%", marginLeft: "100px" }} />
              <form onSubmit={(event) => handleSubmit(event, data, navigate, setMensagem)}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Login"
                    value={data.login}
                    onChange={(event) => handleInputChange(event, setValues)}
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
                    value={data.password}
                    onChange={(event) => handleInputChange(event, setValues)}
                    name="password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-grid mt-4">
                  <button
                    style={{ backgroundColor: "#1f1f1f", border: "1px solid #26282f", marginTop: "30px" }}
                    className="btn btn-primary text-uppercase fw-semibold"
                    type="submit"
                  >
                    LOG IN
                  </button>
                </div>
                <div style={{ textAlign: "center" }}>
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