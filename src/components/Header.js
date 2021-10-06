import React, { useContext } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { connect } from 'react-redux';
import BasicMenu from '../components/BasicMenu'
import { makeStyles } from '@material-ui/core/styles';
import { getItems } from '../store/actions/action';
import Container from '@mui/material/Container'
import { Nav, Navbar, Button } from 'react-bootstrap'
import logo from './logo.png';
import { LoginContext } from '../context/loginContext';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
            <Navbar style={{ position: 'relativ', top: '-60px' }} variant="dark" bg="dark" expand="lg">
                <img src={logo} alt="logo" className="logo" />
                <Container fluid>
                    <Navbar.Brand href="/" className="cube">CUBE STORE</Navbar.Brand>
                    <Navbar.Collapse id="navbar-dark-example">
                    </Navbar.Collapse>
                </Container>
                <Nav className="mr-auto">

                <a href="/MyProfile" ><Nav.Link href="/MyProfile" >
            <Link to="/MyProfile" color="inherit" className="add-PROFILE" style={{display:'block',width:"200px"}}>MY PRODUCTS</Link>
          </Nav.Link></a>
                <a href="/AddProduct" ><Nav.Link href="/AddProduct">
            <Link to="/AddProduct" color="inherit" className="add-product" style={{display:'block',width:"200px"}}>ADD PRODUCT</Link>
          </Nav.Link></a>
                </Nav>
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