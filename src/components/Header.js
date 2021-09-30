import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';




import { getItems } from '../store/actions/action';

import App from '../App'
import Container from '@mui/material/Container'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link,

} from "react-router-dom";
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

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>

            <AppBar position="static">
                <Toolbar>
                    
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Yazan's Store
                    </Typography>
                    <Button color="inherit" onClick={handleOpen}>
                        Signup
                    </Button>
                </Toolbar>
           
            </AppBar>

            <Button color="secondary" onClick={() => { props.show() }}>
                <ShoppingCartIcon></ShoppingCartIcon>
                CART({props.cart.length})</Button>



        </div >
    )

}

function mapStateToProps(state) {
    return { cart: state.cart, state: state.products };
}
const mapDispatchToProps = { getItems };
export default connect(mapStateToProps, mapDispatchToProps)(Header);



