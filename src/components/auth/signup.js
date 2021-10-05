import React, { useState, useContext } from 'react'
import { LoginContext } from "../../context/loginContext";
import'./signup.css';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Link from '@mui/material/Link';
import logo from '../logo.png';
import homep from '../img/homep.png';


function Signup() {
  let context = useContext(LoginContext)

  let [userName, setUserName] = useState('')
  let [password, setPassword] = useState('')
  let [role, setRole] = useState('admin')

  const handleInputUser = e => {
    setUserName(e.target.value);
  }
  const handleInputPass = e => {
    setPassword(e.target.value);
  }
  const handleInputRole = e => {
    setRole(e.target.value);
  }
  const handlerSubmit = async e => {
    e.preventDefault();

    await context.signUp(userName, password, role)
    window.location.href = "/"
  }
  return (
    <div>
       <div className='body2'>
                <img src={logo} alt="logo" className='logo2'/>
                <h1>CUBE</h1>
            </div>
      <section >
        <div >
          <div className='d2'>
            <div className='d1' >
              <div className='login-wrap2'>
                <div>
                <p className='signupp'>SIGN UP</p>
                </div>
                <form onSubmit={handlerSubmit}>
                  <div className="form-group1">
                  <label className="labelP">Enter User Name:</label>
                    <input
                      onChange={handleInputUser}
                      type="text"
                      className="input1"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="form-group1 ">
                  <label className="labelP1">Enter Your Password</label>
                    <input
                      onChange={handleInputPass}
                      type="password"
                      className="input2"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <br />
                  <p className='checking'>Do you already have account 
                    <a href="/"   className='link'>
                              <Nav.Link href="/" style={{color:'#0f3b57',width:'90px',height:'30px',fontFamily:'Noto Sans Display',fontWeight:'bold',position:'relative',top:'-40px',left:'240px',fontSize:'18px'}}>
                                  <Link to="/">LOG IN
                                  </Link>
                              </Nav.Link>
                    </a>
                  </p>
                  <div className="form-group1">
                    <button
                      type="submit"
                      className="login-btn1"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup;
