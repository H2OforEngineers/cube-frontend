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

  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {props.products.activeProducts.map((element) => {
          return <Grid item xs={2} sm={4} md={4}>
            <Card className='cardP'  sx={{ maxWidth: 345 }}>
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