import * as React from 'react';
import { connect } from 'react-redux';
import { getItems, changeBasketItems } from '../store/actions/action';
import { addItemsToCart } from '../store/actions/action';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import {useContext } from 'react'
import { LoginContext } from '../context/loginContext';
import withContext from '../withContext';
import Button from 'react-bootstrap/Button';
import OneProduct from './OneProduct'



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



const Products = props => {
  const context = useContext(LoginContext);

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function handleAdding(element) {
    props.addItemsToCart(element);
    props.changeBasketItems(element);
    props.getItems(props.category.name);
  }
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [indexD, setIndex] = React.useState(false);
  const [vv, setVV] = React.useState([]);
  const [clicked, setClicked] = React.useState(false);

 
  
  function viewModal(index) {
    setIndex(index)
    setShow(true)
    setVV(props.products.activeProducts)
    setClicked(true)
  }

  console.log('indexxxxxx', indexD)
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
 
  // const handleClose = () => setOpen(false);
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {props.products.activeProducts.map((element, index) => {
          return <Grid item xs={2} sm={4} md={4}>
            <Card className='cardP'  sx={{ maxWidth: 400 }}>
           
              <CardHeader
                title={element.name}
                subheader={date}
              />
              <CardMedia
              
                component="img"
                height="194"
                image={element.image}
                alt={element.name}
              />
              
              <CardActions disableSpacing>
              </CardActions>
             

            
            </Card>
            

            <Button onClick={() => viewModal(index)}>View More Details</Button>

            
            
            </Grid>
            
        })}  </Grid>
        {(clicked === true) && <OneProduct show={show} handleClose={handleClose}  index={indexD} vv={vv}/>}


        
    </>
  );
};
function mapStateToProps(state) {
  return {
    category: state.categories.activeCategory,
    products: state.products,
    cartProducts: state.cart
  };
}
const mapDispatchToProps = { getItems, addItemsToCart, changeBasketItems };
export default connect(mapStateToProps, mapDispatchToProps)(withContext(Products));