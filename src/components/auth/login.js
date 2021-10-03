import React, { useState, useContext } from 'react';
import { When } from 'react-if';
import { LoginContext } from "../../context/loginContext";
import "./style.css";

function LoginForm() {
  const signup = () => {
    window.location.href = "/signup"
  }
  let context = useContext(LoginContext)
  let [userName, setUserName] = useState('')
  let [password, setPassword] = useState('')
  const handleInputUser = e => {
    setUserName(e.target.value);
  }
  const handleInputPass = e => {
    setPassword(e.target.value);
  }
  const handlerSubmit = async e => {
    e.preventDefault();

    await context.login(userName, password);
    window.location.href = "/"

  }
  return (
    <>
      <When
        condition={!context.loggedIn}
      >
        <div>
          <section >
            <div className="container">
              <div >
                <div className='d' >
                  <div className="login-wrap p-4 p-md-5">
                    <div >
                      <h2 className="from-h">Log in or Sign up to Cube to continue !!</h2>
                    </div>
                    <p style={{ fontFamily: 'Trebuchet MS', fontWeight: 'bold', fontSize: '20px', marginTop: '200px' }}>LOG IN</p>
                    <form onSubmit={handlerSubmit}>
                      <div className="form-group">
                        <input

                          onChange={handleInputUser}
                          type="text"
                          className="input"
                          placeholder="Username"
                          required
                        />
                      </div>
                      <div className="form-group d-flex">
                        <input
                          onChange={handleInputPass}
                          type="password"
                          className="input"
                          placeholder="Password"
                          required
                        />
                      </div>

                      <br />
                      <div className="form-group">
                        <button
                          type="submit"
                          className="login-btn"
                        >
                          LOGIN
                        </button>
                        <button

                          className="signup-btn"
                          style={{ margin: '0 0 0 190px' }}
                          onClick={signup}
                        >
                          Sign-Up
                        </button>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </When>

    </>
  );
}

export default LoginForm;
