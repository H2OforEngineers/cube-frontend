import React, { Component } from "react";
import withContext from '../withContext';
import axios from 'axios';
import './AddProduct.css'
import Swal from 'sweetalert2'

const initState = {
    name: "",
    price: "",
    inStock: "",
    category: "",
    description: "",
    phoneNumber: ""
};
let empty = '';
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initState,
            products: [],
            user: this.props.user
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
        if (name && price && category && phoneNumber) {
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
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your product has been added',
                showConfirmButton: false,
                timer: 1500
            })
        } else {

            if (!this.state.name) {
                empty = "name"
            } else if (!this.state.price) {
                empty = "price"

            } else if (!this.state.category) {
                empty = "category"

            } else if (!this.state.phoneNumber) {
                empty = "phone number"
            }
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Please fill in ${empty}`,

            })
        }
    };
    handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });
    render() {
        const { name, price, inStock, category, description, phoneNumber, image } = this.state;
        const myTokenCookie = this.props.context.myTokenCookie;
        console.log('user--------------', this.props.user)
        return (
            <>
              
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

                                <label className="labelP">Image: </label>
                                <input
                                    className="inputP"
                                    type="text"
                                    name="image"
                                    value={image}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="fieldP">
                                <label className="labelP">Category: </label>
                                <select className='selectC' name="category" value={category} onChange={this.handleChange} required>

                                    <option value="" className='selectC'>Select Category</option>
                                    <option value="electrical" className='select'>Electrical</option>
                                    <option value="civil" className='select'>Civil</option>
                                    <option value="architect" className='select'>Architect</option>
                                    <option value="mechanic" className='select'>Mechanic</option>
                                </select>
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