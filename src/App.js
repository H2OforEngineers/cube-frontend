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
import React, { useState ,useContext} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './components/Main'
import AddProduct from './components/AddProduct';
import Header from './components/Header'
import Footer from './components/Footer'
import SimpleCart from './components/SimpleCart'
import LoginForm from './components/auth/login';
import {LoginContext} from './context/loginContext';
import { If, Else, Then } from "react-if";
import Signup from "./components/auth/signup.js";

function App() {
  const  context  = useContext(LoginContext);
  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart(true)
  }
  return (

    <div className="App">
      <Router>
        <Switch>
          <If condition={context.loggedIn == true}>
            <Then>

              <Header show={handleShowCart} />
              {showCart && <SimpleCart />}
              <Switch>
              <Route exact path="/AddProduct">
                <AddProduct />
              </Route>
              </Switch>
            
              <Route exact path="/">
             <Main />
          </Route>

              <Footer />
            
            </Then>
            
            <Else>

              <Route exact path="/">
                <LoginForm />
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
