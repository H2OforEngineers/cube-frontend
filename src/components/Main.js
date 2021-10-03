import React, { Component,useState } from 'react'
import Products from '../components/Products'
import Categories from '../components/Categories'
// import UploadImage from './UplodImage'




function Main() {
 

    return (
        <div >  
             {/* <UploadImage/>       */}
                <Categories />
                <Products />
            </div >
  
    );
  }
  
  export default Main;