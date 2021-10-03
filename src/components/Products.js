
import * as React from 'react';
import { connect } from 'react-redux';
import { getItems, changeBasketItems } from '../store/actions/action';
import { addItemsToCart } from '../store/actions/action';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import { useEffect, useState, useContext } from 'react'
import { LoginContext } from '../context/loginContext';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import withContext from '../withContext';



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

  // const classes = useStyles();
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>



        {props.products.activeProducts.map((element) => {
          return <Grid item xs={2} sm={4} md={4}>
            <Card className='cardP' onClick={handleOpen} sx={{ maxWidth: 345 }}>

              {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {element.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {element.description}
          </Typography>
        </Box>
      </Modal> */}
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
              <CardContent>

                <Typography variant="body2" color="textPrimary" component="h3" >
                  Price: {element.price}$
                </Typography>
                <Typography variant="body2" color="textPrimary" component="h3" >
                  Contact Number: {element.phoneNumber}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="h3" >
                  Added by: {element.user === context.user.username ? "You" : element.user}
                </Typography>





              </CardContent>

              <CardActions disableSpacing>



                {/* 
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton> */}
                <p className="desc">Click Here to expand description</p>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                    {element.description}
                  </Typography>

                </CardContent>
              </Collapse>
            </Card></Grid>

        })}  </Grid>
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