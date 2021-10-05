import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export class OneProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
      
        
        };
    }

  

    
    render() {
       
        return (
            <div>
                <Modal show={this.props.show} onClick={this.props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.vv[this.props.index].name}</Modal.Title>
         
        </Modal.Header>
        <Modal.Body>
            <Card border="light" style={{ width: '30rem' } }>
  <Card.Img variant="top" src={this.props.vv[this.props.index].image} />
  <Card.Body>
    
    <Card.Text>
    Description: {this.props.vv[this.props.index].description}
    </Card.Text>
    
        
    <Card.Text>
    Price: {this.props.vv[this.props.index].price}$
    </Card.Text>
    <Card.Text>
    Added by: {this.props.vv[this.props.index].user}
    </Card.Text>
    <Card.Text>
    Product ID: {this.props.vv[this.props.index].id}
    </Card.Text>
  </Card.Body>
  <Button variant="primary" onClick={this.props.handleClose}>
            Close
          </Button>
</Card>

</Modal.Body>
    
      </Modal>
            </div>
        )
    }
}


export default OneProduct;