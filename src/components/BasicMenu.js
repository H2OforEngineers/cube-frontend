import React, { useState, useContext } from 'react'
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { LoginContext } from '../context/loginContext';
import { Button} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,

} from "react-router-dom";
import './BasicMenue.css'

export default function BasicMenu() {
  const context = useContext(LoginContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
<Button style={{color:'whitesmoke'}} variant="outline-primary" onClick={context.logout}  className="logout-button2">Logout</Button>
      {/* <Button
        id="basic-button"
        aria-controls="basic-menu"
        // color="white"
        variant="contained"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        MENU
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <MenuItem href="/MyProfile" className='menueI'>
        <Link to="/MyProfile" className='menueI'>MyProfile</Link>
        </MenuItem>
        <MenuItem href="/AddProduct" className='menueI'>
          <Link to="/AddProduct" className='menueI'>Add Product</Link>
        </MenuItem>
        <MenuItem className="bp3-button bp3-minimal bp3-icon-log-out" onClick={context.logout} className='menueI'>
        <Link to="/" className='menueI'>Logout</Link></MenuItem>
      </Menu> */}
    </div>
  );
}

