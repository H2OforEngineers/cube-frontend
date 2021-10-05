import React from "react";
import LoginForm from "./auth/login";
import './home.css';
import logo from './logo.png';
import d from './img/3d.jpg';
import homep from './img/homep.png';




function Home() {
    return (
        <div className='body'>
            <div className='body1'>
                <img src={logo} alt="logo" className='logo1'/>
                <h1>CUBE</h1>
                <h3>A site for engineers, through which we can exchange experiences in various fields and purchase supplies that are used in various fields</h3>
                <img src={d} alt='background' className='image'/>
                <img src={homep} alt='background' className='image1'/>
                <LoginForm/>
            </div>
        </div>
    )
}

export default Home;