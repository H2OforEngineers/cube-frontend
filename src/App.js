// import './App.css';
// import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import Main from './components/Main'
// import AddProduct from './components/AddProduct';
// import Header from './components/Header'
// import Footer from './components/Footer'
// import SimpleCart from './components/SimpleCart'
// function App() {
//   const [showCart, setShowCart] = useState(false);
//   function handleShowCart() {
//     setShowCart(true)
//   }
//   return (
//     <div className="App">
//       <Router>
//       <Header show={handleShowCart} />
//       {showCart && <SimpleCart />}
//         <Switch>
//           <Route exact path="/AddProduct">
//             <AddProduct />
//           </Route>
//         </Switch>
//         <Switch>
//           <Route exact path="/">
//             <Main />
//           </Route>
//         </Switch>
//       </Router >
//       <Footer />
//     </div >
//   );
// }
// export default App;
// ===================================
import './App.css';

import React, {useEffect, useState, useContext } from 'react'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './components/Main'
import AddProduct from './components/AddProduct';
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs';
import SimpleCart from './components/SimpleCart';
import Home from './components/home';
import LoginForm from './components/auth/login';
import { LoginContext } from './context/loginContext';
import { If, Else, Then } from "react-if";
import Signup from "./components/auth/signup.js";
import axios from 'axios'

import LiveChat from './components/LiveChat';

import MyProfile from "./components/MyProfile";
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

function App() {
  const context = useContext(LoginContext);
  const [showCart, setShowCart] = useState(false);
  function handleShowCart() {
    setShowCart(true)
  }



  //----------------------------------------//IP section
  const [ip, setIP] = useState('');
  const [country, setCountry] = useState('');

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
    setCountry(res.data.country_name)
  }

  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  return (
    <div className="App">
       

      <Router>
        <Switch>
          <If condition={context.loggedIn == true}>
            <Then>
              <Header show={handleShowCart} />
              {showCart && <SimpleCart />}
              <LiveChat/>
              <Switch>
              <Route exact path="/AddProduct">
                <AddProduct user={context.user} />
              </Route>
              <Route exact path="/MyProfile">
                <MyProfile user={context.user} ip={ip} country={country}/>
              </Route>
              </Switch>
            
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/AboutUs">
                <AboutUs />
              </Route>
              <Footer />
            
            </Then>
            
            <Else>
              <Route exact path="/">
                <Home />
                {/* <LoginForm /> */}
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
            </Else>
          </If>
        </Switch>
      </Router >
    </div >
  );
}
export default App;