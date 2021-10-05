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
import { Nav, Navbar } from 'react-bootstrap'
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
            <Navbar style={{ position: 'relativ', top: '-60px' }} variant="dark" bg="dark" expand="lg">
                <img src={logo} alt="logo" className="logo" />
                <Container fluid>
                    <Navbar.Brand href="/" className="cube">CUBE STORE</Navbar.Brand>
                    <Navbar.Collapse id="navbar-dark-example">
                    </Navbar.Collapse>
                </Container>
                    <Nav className="mr-auto">
                    <Nav.Link className="add-PROFILE" href="/MyProfile" >PROFILE</Nav.Link>
                    <Nav.Link  className="add-product" href="/AddProduct"> ADD PRODUCT </Nav.Link>
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