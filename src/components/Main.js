import React from 'react'
import Products from '../components/Products'
import Categories from '../components/Categories'
import SlideShow from '../components/SlideShow'
// import UplodImage from '../components/UplodImage'


function Main() {


    return (
        <div >
            <SlideShow className="sssssss"/>
            <Categories />
            {/* <UplodImage/> */}
            <Products />
        </div >

    );
}

export default Main;