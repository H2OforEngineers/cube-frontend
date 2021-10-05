import React, { useState, useContext } from 'react'
import { LoginContext } from '../context/loginContext';
import Link from '@mui/material/Link';
import { Nav, Navbar, Button } from 'react-bootstrap'


import './BasicMenue.css'

export default function BasicMenu() {
  const context = useContext(LoginContext)
  return (
    <div>
      <Button style={{color:'whitesmoke',width:'110px',height:'30px',borderRadius:'0px'}} variant="outline-primary" onClick={context.logout}  className="logout-button2"> 
      <a href="/" ><Nav.Link href="/" >
            <Link to="/" color="inherit" style={{display:'block',color:'whitesmoke',width:'100px',position:'relative',left:'-25px',top:'-10px'}}>LOG OUT</Link>
          </Nav.Link></a>
      </Button>
    </div>
  );
}

