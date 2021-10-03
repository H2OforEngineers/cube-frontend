import React, { useState, useContext } from 'react'
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
// import App from '../App'
import Container from '@mui/material/Container'
import { Nav, Navbar } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link,

} from "react-router-dom";

import logo from './logo.png';
import { LoginContext } from '../context/loginContext';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


function Header(props) {
    const context = useContext(LoginContext)
    const classes = useStyles();
    return (
        <div>
            <Navbar style={{position:'relativ',top:'-60px'}}variant="dark" bg="dark" expand="lg">
                <img src={logo} alt="logo"  className="logo" />
                <Container fluid>
                    <Navbar.Brand href="/" className="cube">CUBE STORE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />

                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <BasicMenu />
            </Navbar>
        </div >
    )

}

function mapStateToProps(state) {
    return { cart: state.cart, state: state.products };
}
const mapDispatchToProps = { getItems };
export default connect(mapStateToProps, mapDispatchToProps)(Header);