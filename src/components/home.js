import React from "react";
import LoginForm from "./auth/login";
import './home.css';
import logo from './logo.png';

function Home(){
    return(
        <div className='body'>
        <img src={logo} alt="logo" className='logo1'/>

        {/* <div className='line1'></div> */}
        <h1>Cube</h1>
        <h3>A site for engineers, through which we can exchange experiences in various fields and purchase supplies that are used in various fields</h3>
        <img src='https://appealroofing.com.au/wp-content/uploads/2017/01/GALLERYAdobeStock_108351812-300x198.jpg' alt='background' className='image'/>
        <LoginForm/>
        </div>
    )
}

export default Home;