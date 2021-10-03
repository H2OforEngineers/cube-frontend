import React from "react";

import { BrowserRouter as Router, Switch, Route ,Link } from "react-router-dom";
import { Nav, Navbar  } from 'react-bootstrap'
const Footer = () => {
  return (


    <footer className="footer" id='border'>
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About Our Website</span> Cube Store it's website that help you to find the best tools and services for engineer ,
          and it's built by four of best members of ASAC college
        </p>
        <div id="btnSocial">
          <p className="about">You can visit on out GITHUB profile </p>

          <a href="https://github.com/H2OforEngineers" >
            <i className="fab fa-github" fa-xs></i>
          </a>
          






        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>Amman Jordan</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> <span> sultan: (+962) 790929803</span>

            <span> qusai:(+962) 792877625</span>
            <span> yazan :(+962) 791852357</span>
          </p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>

          <p><a href="#"> office@cubestore.com</a></p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2>Cube Store</h2>
        <p className="menu">
          <a href="/"> Home</a>  |

          <a href="/AboutUs"><Nav.Link href="/AboutUs">
                 <Link to="/AboutUs">AboutUs</Link>
             </Nav.Link></a>


        </p>
        <p className="name"> &copy; Copyright 2021 : CUBE STORE </p>
        {/* <img src={logoo} height="200" width="250" id='corn' /> */}
      </div>
    </footer>
  );
}


export default Footer;