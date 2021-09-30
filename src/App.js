// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,

} from "react-router-dom";


import ReactDOM from "react-dom";


// import AddProduct from '../components/AddProduct'

import Main from './components/Main'
import AddProduct from './components/AddProduct';

import Header from './components/Header'
import Footer from './components/Footer'
import SimpleCart from './components/SimpleCart'

function App() {

  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart(true)
  }
  return (
    <div className="App">
      <Router>
      <Header show={handleShowCart} />
      {showCart && <SimpleCart />}
   

      

        <Switch>
          
          <Route exact path="/AddProduct">

            <AddProduct />
          </Route>
        </Switch>

        <Switch>

      
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>

      </Router >
      <Footer />


    </div >

  );
}

export default App;
