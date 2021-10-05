import React, {  useContext } from 'react'
import { LoginContext } from '../context/loginContext';
import Link from '@mui/material/Link';
import { Nav, Button } from 'react-bootstrap'


import './BasicMenue.css'

export default function BasicMenu() {
  const context = useContext(LoginContext)
  return (
    <div>
      <Button style={{color:'whitesmoke',width:'100px',height:'50px'}} variant="outline-primary" onClick={context.logout}  className="logout-button2"> 
      <a href="/" ><Nav.Link href="/" >
            <Link to="/" color="inherit" style={{display:'block',color:'whitesmoke',width:'100px',position:'relative',left:'-25px'}}>LOG OUT</Link>
          </Nav.Link></a>
      </Button>
    </div>
  );
}

