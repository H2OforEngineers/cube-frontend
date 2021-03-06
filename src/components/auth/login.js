import React, { useState, useContext } from 'react';
import { When } from 'react-if';
import { LoginContext } from "../../context/loginContext";
import "./style.css";
import './login.css';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Link from '@mui/material/Link';



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
            <div >
              <div >
                <div className='d' >
                  <div >
                    <div >
                      <h2 className="f-h1">Welcome </h2>
                      <h2 className="f-h2">Log in to continue or sign up to create a new account </h2>
                    </div>
                    <form onSubmit={handlerSubmit}>
                      <div className="form-group1">
                       <label className="labelL">Enter User Name:</label>
                        <input
                          onChange={handleInputUser}
                          type="text"
                          className="input"
                          placeholder="Username"
                          required
                        />
                      </div>
                      <div className="form-group1">
                      <label className="labelL1">Enter Your Password</label>
                        <input
                          onChange={handleInputPass}
                          type="password"
                          className="input"
                          placeholder="Password"
                          required
                        />
                      </div>
                      <br />
                      <div className="form-group1">
                        <button
                          type="submit"
                          className="login-btn"
                        >
                          LOGIN
                        </button>
                        <Button variant="none"  style={{borderRadius:'0px' ,width:'90px',height:'30px',border:'1px solid #0f3b57',fontFamily:'Noto Sans Display',fontWeight:'bold',position:'relative',top:'-2px',left:'40px',fontSize:'15px'}} onClick={signup}> 
                          
                                <Link to="/signup"  style={{display:'block',color:'#0f3b57',width:'100px',position:'relative',left:'-25px',top:'-5px',paddingLeft:'10px'}}>SIGN UP
                                </Link>
                        </Button>
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
