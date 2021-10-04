import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import './SlideShow.css';

export class SlideShow extends Component {
    render() {
        return (
            <>
                <div className="slideShow">
                    <Carousel>
                     
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={"https://cdn-images.zety.com/pages/mechanical_engineer_cover_letter_example_3.jpg"}
                                alt="Third slide"
                                style={{ width: "200px", hight: "0px" }}
                            />   
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={"https://cdn-images.zety.com/pages/electrical_engineering_cover_letter_example_1.jpg"}
                                alt="Second slide"
                                style={{ width: "200px", hight: "0px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={"https://media-exp1.licdn.com/dms/image/C561BAQF-O13PPUZUHg/company-background_10000/0/1547465331084?e=2159024400&v=beta&t=AYG2GECBUdkizWBAJoLYhg7jCQ5UwzF-J-oz5Wx86qc"}
                                alt="Second slide"
                                style={{ width: "200px", hight: "0px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={"https://www.heunis.co.za/images/banner-technical-drawing.jpg"}
                                alt="Second slide"
                                style={{ width: "200px", hight: "0px" }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </>
        )
    }
}

export default SlideShow