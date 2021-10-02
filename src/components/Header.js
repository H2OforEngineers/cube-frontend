import React, { useState ,useContext} from 'react'
import Typography from '@mui/material/Typography'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BasicMenu from '../components/BasicMenu'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { getItems } from '../store/actions/action';
import App from '../App'
import Container from '@mui/material/Container'
import {Nav , Navbar} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link,

} from "react-router-dom";


import { LoginContext } from '../context/loginContext';
import './Header'

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

// import { Link } from '@mui/material';
function Header(props) {
    const context=useContext(LoginContext)
    const classes = useStyles();
    const [open, setOpen] = useState(false);


    return (
        <div style={{backgroundColor:'#E7BC91'}}>

            <AppBar position="static">
                <Toolbar>
                <img src="../images/logo.png" alt="logo" className={classes.logo} />

                    <Navbar bg="light" expand="lg">
                        <Nav className="me-auto">
                            <Nav.Link href="/">                          
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            {/* <Nav.Link href="/AddProduct">
                                <Link to="/AddProduct">AddProduct</Link>
                            </Nav.Link> */}
                        </Nav>
                    </Navbar>
{/* 
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className={classes.menuButton}
                    >

                    </IconButton> */}
                    
                    <Typography variant="h4" className={classes.title}>
                        Cube Store
                    </Typography>
               
                 
                <ShoppingCartIcon></ShoppingCartIcon>

            <Button color="secondary" onClick={() => { props.show() }}>
                CART({props.cart.length})</Button>
                <BasicMenu  />
                {/* <button className="bp3-button bp3-minimal bp3-icon-log-out" onClick={context.logout} >Log-Out</button> */}
                </Toolbar>

            </AppBar>



        </div >
    )

}

function mapStateToProps(state) {
    return { cart: state.cart, state: state.products };
}
const mapDispatchToProps = { getItems };
export default connect(mapStateToProps, mapDispatchToProps)(Header);



