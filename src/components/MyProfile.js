import React, { Component } from 'react'
import axios from 'axios';
import withContext from '../withContext';
import { Button } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Swal from 'sweetalert2';
import './MyProfile.css'


 styled((props) => {
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
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

export class Profile1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sentReq: false,
      index: 0,
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
      sentReq: true
    });
    console.log(this.state.products)
  };
  delete = async (id) => {
    await axios.delete(`https://cube-backend-401.herokuapp.com/product/mechanic/${id}`)
    Swal.fire({
      title: 'Success!',
      text: 'Product deleted successfully!',
      icon: 'success',
      confirmButtonText: 'Refreshing in 2 seconds...'

    })
    setTimeout(function () {
      window.location.reload(1);
    }, 2000)
  };


  render() {

    return (
      <>
        <img src='https://media.istockphoto.com/photos/artwork-blue-wave-and-empty-space-for-add-message-3d-illustration-picture-id1006001896?k=20&m=1006001896&s=612x612&w=0&h=2oU0rALsB3RazuGKZ5CnDyyVe1jWF1k0Wo6EikOGVTs=' alt='pbg' className='pbg' />
        <div className='dmp'>
          <h3 className='mp'>Logged in from</h3>
          <h3 className='mp'>IP address: {this.props.ip}</h3>
          <h3 className='mp'>Country: {this.props.country}</h3>
        </div>
        <h1 className='profileH'>MY PROFILE</h1>
        <h3 className='productP'>MY PRODUCTS</h3>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {this.state.products.map((element) => {
            return <Grid item xs={2} sm={4} md={4} >
              <Card className='cardP' sx={{ maxWidth: 345 }}>
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
                <CardContent >
                  <Typography variant="body2" color="textPrimary" component="h3" >
                    Price: {element.price}$
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="h3" >
                    Contact Number: {element.phoneNumber}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="h3" >
                    Product ID: {element.id}

                  </Typography>
                  <Button variant="outline-danger" onClick={() => this.delete(element.id)}>Delete Product</Button>{' '}
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
export default withContext(Profile1);