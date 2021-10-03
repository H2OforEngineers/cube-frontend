import React, { Component } from 'react'
import axios from 'axios';
import withContext from '../withContext';
/////////////////////////////
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button } from 'react-bootstrap';
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
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
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
export class Profile1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[],
            sentReq:false,
            index:0,
            value: ''
        }
   
    }
    
    
    componentDidMount = async () => {  
        const user = this.props.user.username
        console.log(user)
        const products = await axios.get(`https://cube-backend-401.herokuapp.com/product/mechanic/${user}`);
        console.log('product data exists!', products.data);
        
        this.setState({
            products: products.data,
            sentReq:true
        });
        console.log(this.state.products)
      };
      delete=async(id)=>{
        await axios.delete(`https://cube-backend-401.herokuapp.com/product/mechanic/${id}`)
        window.location.reload(false);
      };
      
     
    render() {
        
        return (
         <>
         <h1>My Profile</h1>
         <h3>My Products</h3>
     
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  
  
  {this.state.products.map((element) => {   
      return      <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ maxWidth: 345 }}>
      
     
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          P
        </Avatar>
      }
      
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
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
             Product ID: {element.id}
             
                  </Typography>
                  <Button variant="outline-danger" onClick={() =>this.delete(element.id)}>Delete Product</Button>{' '}
                  
                  
              
              
         
         
         
    </CardContent>
    
    <CardActions disableSpacing>
      
   
    
    
      
  
    </CardActions>
    <Collapse timeout="auto" unmountOnExit>
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
        )
    }
}
export default withContext(Profile1)