import React, {useContext } from 'react'
import { LoginContext } from '../context/loginContext';
import { Button} from 'react-bootstrap'
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
    </div>
  );
}

