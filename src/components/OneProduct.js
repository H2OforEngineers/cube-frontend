import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { LoginContext } from '../context/loginContext';
import withContext from '../withContext';
export class OneProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {


    };
  }

  static contextType = LoginContext;
  render() {
    return (
      <div>
        <Modal show={this.props.show}  >
          <Modal.Header >
            <Modal.Title>
              <h2>{this.props.vv[this.props.index].name}</h2></Modal.Title>

          </Modal.Header>
          <Modal.Body>
            <Card border="light" style={{ width: '29rem' }}>
              <Card.Img variant="top" src={this.props.vv[this.props.index].image} />
              <Card.Body>
                <hr />
                <Card.Text>
                  <h3>Description:</h3>
                  {this.props.vv[this.props.index].description}
                </Card.Text>


                <Card.Text>
                  <h3>Price:</h3>
                  <hr />
                  {this.props.vv[this.props.index].price}$
                </Card.Text>
                <Card.Text>
                  <hr />
                  <h3>Added by:</h3>
                  {this.props.vv[this.props.index].user === this.context.user.username ? "You" : this.props.vv[this.props.index].user}
                </Card.Text>
                <hr />
                <Card.Text>
                  <h3> Product ID:</h3>
                  {this.props.vv[this.props.index].id}
                </Card.Text>
              </Card.Body>
              <Button variant="danger" style={{ border: '1px solid #0f3b57', borderRadius: '0px' }} onClick={this.props.handleClose}>
                Close
              </Button>
            </Card>

          </Modal.Body>

        </Modal>
      </div>
    )
  }
}


export default withContext(OneProduct);