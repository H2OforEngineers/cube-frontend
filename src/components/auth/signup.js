import React, { useState, useContext } from 'react'
import { LoginContext } from "../../context/loginContext";
import'./signup.css';
import d from '../img/3d.jpg';
import signup1 from '../img/signup1.png';



function Signup() {
  let context = useContext(LoginContext)

  let [userName, setUserName] = useState('')
  let [password, setPassword] = useState('')
  let [role, setRole] = useState('buyer')

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
      <img src={d}  alt='back'className='bg'/>
      <img src='https://www.influxdata.com/wp-content/uploads/A-platform-for-Builders.png'  alt='back'className='bg2'/>
      <section >
        <div >
          <div >
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
                  {/* <div className="form-group d-flex">
                    <select className="form-control rounded-left"
                      onChange={handleInputRole}>
                      <option value='buyer'>buyer</option>
                      <option value='admin'>admin</option>
                    </select>

                  </div> */}
                  <br />
                  <p className='checking'>Do you already have account  <a href='/' className='link'> login</a></p>
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

export default Signup
