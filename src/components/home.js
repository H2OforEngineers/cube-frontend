import React from "react";
import LoginForm from "./auth/login";
import './home.css';
import logo from './logo.png';
import homep from './img/homep.png';
import { Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
    return (
        <div className='body'>
            <div className='body1'>
                <img src={logo} alt="logo" className='logo1'/>
                <h1>CUBE</h1>
                <h3>A site for engineers, through which we can exchange experiences in various fields and purchase supplies that are used in various fields</h3>
                <img src={homep} alt='background' className='image1'/>
                <LoginForm/>
                <div className="homeF">
                    <h2 className='homeh2'>CUBE STORE</h2>
                    <p className="name1"> &copy; Copyright 2021 : CUBE STORE </p>

                        <Link to="/AboutUs" style={{color:'#0f3b57',border:'1px solid #0f3b57',width:'110px',height:'30px',display:'block',position:'relative',top:'-90px',left:'1100px',}}>AboutUs
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;