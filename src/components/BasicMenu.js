import React, { useState, useContext } from 'react'
import { LoginContext } from '../context/loginContext';
import { Button } from 'react-bootstrap';
import Link from '@mui/material/Link';


import './BasicMenue.css'

export default function BasicMenu() {
  const context = useContext(LoginContext)
  return (
    <div>
      <Button style={{color:'whitesmoke'}} variant="outline-primary" onClick={context.logout}  className="logout-button2"> <Link color="inherit"underline="none" href="/">Log out</Link></Button>
    </div>
  );
}

