import React, { Component } from "react";
import withContext from '../withContext';
// import { Redirect } from "react-router-dom";
import axios from 'axios';
import './AddProduct.css'

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
const initState = {
    name: "",
    price: "",
    inStock: "",
    category: "",
    description: "",
    phoneNumber: ""
};
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initState,
            products: [],
            user:this.props.user
        };
    }
    addProduct = (product, callback) => {
        let products = this.state.products.slice();
        products.push(product);
        this.setState({ products }, () => callback && callback());
    };
    save = async (e) => {
        e.preventDefault();
        const { name, price, inStock, category, description, phoneNumber, image } = this.state;
        const user = this.props.user.username
        if (name && price) {
            // const id = Math.random().toString(36).substring(2) + Date.now().toString(36);
            await axios.post(
                'https://cube-backend-401.herokuapp.com/product/mechanic',
                { name, price, inStock, category, description, phoneNumber, image, user },
            )
            this.addProduct(
                {
                    name,
                    price,
                    category,
                    description,
                    inStock: inStock || 0,
                    phoneNumber,
                    image
                },
                () => this.setState(initState)
            );
            this.setState(
                { flash: { status: 'is-success', msg: 'Product created successfully' } }
            );
        } else {
            this.setState(
                { flash: { status: 'is-danger', msg: 'Please enter name and price' } }
            );
        }
    };
    handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });
    render() {
        const { name, price, inStock, category, description, phoneNumber, image } = this.state;
        const myTokenCookie = this.props.context.myTokenCookie;
        console.log('user--------------', this.props.user)
        return (
            <>
                <img src='https://i.pinimg.com/474x/80/f8/8d/80f88d580fd87e5c4284124570c47ab3.jpg' alt='background' className='imageP'/>
                <div>
                    <div className="">
                        <h4 className="titleP">ADD PRODUCT</h4>
                    </div>
                </div>
                <br />
                <br />
                <form onSubmit={this.save}>
                    <div className='con'>
                        <div >
                            <div className="fieldP">
                                <label className="labelP">Product Name: </label>
                                <input
                                    className="inputP"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="fieldP">
                                <label className="labelP">Price: </label>
                                <input
                                    className="inputP"
                                    type="number"
                                    name="price"
                                    value={price}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="fieldP">
                                <label className="labelP">Phone Number: </label>
                                <input
                                    className="inputP"
                                    type="number"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="fieldP">
                                <label className="labelP">Available In Stock: </label>
                                <input
                                    className="inputP"
                                    type="number"
                                    name="inStock"
                                    value={inStock}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="fieldP">
                                <ImagesUploader
                                    url="https://cube-backend-401.herokuapp.com/product/mechanic"
                                    optimisticPreviews
                                    multiple={false}
                                    value={image}
                                    onLoadEnd={(err) => {
                                        if (err) {
                                            console.error(err);
                                        }
                                    }}
                                    label="Upload a picture"
                                />
                                <label className="labelP">Image: </label>
                                {/* <input
                  className="inputP"
                  type="text"
                  name="image"
                  value={image}
                  onChange={this.handleChange}
                /> */}
                            </div>

                            <div className="fieldP">
                                <label className="labelP">Category: </label>
                                <select className="inputP" name="category" value={category} onChange={this.handleChange} required>

                                    <option value="">Select Category</option>
                                    <option value="electrical">Electrical</option>
                                    <option value="civil">Civil</option>
                                    <option value="architect">Architect</option>
                                    <option value="mechanic">Mechanic</option>
                                </select>
                                {/* <input
                                    className="input"
                                    type="text"
                                    name="category"
                                    value={category}
                                    onChange={this.handleChange}
                                    required
                                /> */}
                            </div>
                            <div className="fieldP">
                                <label className="labelP">Description: </label>
                                <textarea
                                    className="textareaP"
                                    type="text"
                                    rows="2"
                                    style={{ resize: "none" }}
                                    name="description"
                                    value={description}
                                    onChange={this.handleChange}
                                />
                            </div>
                            {this.state.flash && (
                                <div className={`notification ${this.state.flash.status}`}>
                                    {this.state.flash.msg}
                                </div>
                            )}
                            <div className="fieldP ">
                                <button
                                    className="buttonP"
                                    type="submit"
                                    onClick={this.save}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

            </>
        )
    }
}
export default withContext(AddProduct);