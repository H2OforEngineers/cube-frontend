import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './about.css'
import about from './img/back.PNG';


class AboutUs extends Component {
    render() {
        return (
            <>
            <img src='https://media.istockphoto.com/vectors/abstract-fluid-multicolors-background-vector-id1192970294?k=20&m=1192970294&s=612x612&w=0&h=DdgCszZVY87gpukYdmPoE4jSK1pfsdnDNbj0Ff8qNGA=' alt='aboutUs' className='about'/>
                <h1 className='team'>TEAM MEMBERS </h1>
                <Container>
                    <Row>
                        <Col>
                            <div class="card-container">
                                <div class="card">
                                    <div class="front">
                                        <div class="cover">
                                            <img src={about} alt='title'/>
                                        </div>
                                        <div class="user" >
                                            <img src="https://avatars.githubusercontent.com/u/82365522?s=400&u=f52449091124c13778b5ca5ff6225ea75c163b5d&v=4" alt='title'/>
                                        </div>
                                        <div class="content">
                                            <div class="main">
                                                <h3 class="name">
                                                    Qusai ALQaisi
                                                </h3>
                                                <p class="profession">
                                                    Team Leader
                                                </p>
                                                <h5>
                                                    <i class="fa fa-map-marker fa-fw text-muted"></i>Software Developer
                                                </h5>
                                                <h5>
                                                    <i class="fa fa-building-o fa-fw text-muted"></i> ASAC
                                                </h5>
                                                <h5>
                                                    <i class="fa fa-envelope-o fa-fw text-muted"></i>Qusaiqeisi@gmail.com
                                                </h5>
                                            </div>
                                            <div class="footer1">
                                                <div class="rating">
                                                    <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="header">
                                            <h5 class="motto">
                                                "To be or not to be, this is my awesome motto!"
                                            </h5>
                                        </div>
                                        <div class="content">
                                            <div class="main">
                                                <h4 class="text-center">
                                                    Experince
                                                </h4>
                                                <p>
                                                    In the project since April 2021.
                                                </p>
                                                <h4 class="text-center">
                                                    Areas of Expertise
                                                </h4>
                                                <p>
                                                    Web design, React.js, HTML5, CSS3, Node.js , PostgreSQL                                                </p>
                                            </div>
                                        </div>
                                        <div class="footer1">
                                            <div class="social-links text-center">
                                                <SocialIcon className="social" url="https://www.linkedin.com/in/qusai-alqaisi-090037135/" />
                                                <SocialIcon className="social" url="https://github.com/qusaiqeisi" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div class="card-container">
                                <div class="card">
                                    <div class="front">
                                        <div class="cover">
                                            <img src={about} alt='title'/>
                                        </div>
                                        <div class="user">
                                            <img class="img-circle" src="https://avatars.githubusercontent.com/u/81819632?s=400&u=cd0741bacd32581d384f94486ae53dc9480ea83f&v=4" alt='title'/>
                                        </div>
                                        <div class="content">
                                            <div class="main">
                                                <h3 class="name">
                                                    Sultan Elayan
                                                </h3>
                                                <p class="profession">
                                                    Team Member
                                                </p>
                                                <h5>
                                                    <i class="fa fa-map-marker fa-fw text-muted"></i>Software Developer
                                                </h5>
                                                <h5>
                                                    <i class="fa fa-building-o fa-fw text-muted"></i>ASAC
                                                </h5>
                                                <h5>
                                                    <i class="fa fa-envelope-o fa-fw text-muted"></i>sultan.m.elayan@gmail.com
                                                </h5>
                                            </div>
                                            <div class="footer1">
                                                <div class="rating">
                                                    <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="header">
                                            <h5 class="motto">
                                                "To be or not to be, this is my awesome motto!"
                                            </h5>
                                        </div>
                                        <div class="content">
                                            <div class="main">
                                                <h4 class="text-center">
                                                    Experince
                                                </h4>
                                                <p>
                                                    Sultan Elayan was working with our team since April 2021.
                                                </p>
                                                <h4 class="text-center">
                                                    Areas of Expertise
                                                </h4>
                                                <p>
                                                    Web design, React.js, HTML5, CSS3, Node.js , PostgreSQL  </p>
                                            </div>
                                        </div>
                                        <div class="footer1">
                                            <div class="social-links text-center">
                                                <SocialIcon className="social" url="https://www.linkedin.com/in/sultan-elayan-77702591/" />
                                                <SocialIcon className="social" url="https://github.com/sultan-elayan" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div class="card-container">
                                <div class="card">
                                    <div class="front">
                                        <div class="cover">
                                            <img src={about} alt='title'/>
                                        </div>
                                        <div class="user">
                                            <img class="img-circle" src="https://avatars.githubusercontent.com/u/82310958?v=4" alt='title'/>
                                        </div>
                                        <div class="content">
                                            <div class="main">
                                                <h3 class="name">
                                                    Razan alamleh
                                                </h3>
                                                <p class="profession">
                                                    Team Member
                                                </p>
                                                <h5>
                                                    <i class="fa fa-map-marker fa-fw text-muted"></i>Software Developer
                                                </h5>
                                                <h5>
                                                    <i class="fa fa-building-o fa-fw text-muted"></i>ASAC
                                                </h5>
                                                <h5>
                                                    <i class="fa fa-envelope-o fa-fw text-muted"></i>razanalamleh@gmail.com
                                                </h5>
                                            </div>
                                            <div class="footer1">
                                                <div class="rating">
                                                    <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="header">
                                            <h5 class="motto">
                                                "To be or not to be, this is my awesome motto!"
                                            </h5>
                                        </div>
                                        <div class="content">
                                            <div class="main">
                                                <h4 class="text-center">
                                                    Experince
                                                </h4>
                                                <p>
                                                    Razan alamleh was working with our team since April 2021.
                                                </p>
                                                <h4 class="text-center">
                                                    Areas of Expertise
                                                </h4>
                                                <p>
                                                    Web design, React.js, HTML5, CSS3, Node.js, PostgreSQL                                                 </p>
                                            </div>
                                        </div>
                                        <div class="footer1">
                                            <div class="social-links text-center">
                                                <SocialIcon className="social" url="https://www.linkedin.com/in/razan-tariq-a21079200/" />
                                                <SocialIcon className="social" url="https://github.com/Razan-am" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div class="card-container">
                                <div class="card">
                                    <div class="front">
                                        <div class="cover">
                                            <img src={about} alt='title'/>
                                        </div>
                                        <div class="user">
                                            <img class="img-circle" src="https://avatars.githubusercontent.com/u/79137633?v=4" alt='title' />
                                        </div>
                                        <div class="content">
                                            <div class="main">
                                                <h3 class="name">
                                                    Yazan Baker
                                                </h3>
                                                <p class="profession">
                                                    Team Member
                                                </p>
                                                <h5>
                                                    <i class="fa fa-map-marker fa-fw text-muted"></i>Software Developer
                                                </h5>
                                                <h5>
                                                    <i class="fa fa-building-o fa-fw text-muted"></i>ASAC
                                                </h5>
                                                <h5>
                                                    <i class="fa fa-envelope-o fa-fw text-muted"></i>yazanbaker@gmail.com
                                                </h5>
                                            </div>
                                            <div class="footer1">
                                                <div class="rating">
                                                    <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="header">
                                            <h5 class="motto">
                                                "To be or not to be, this is my awesome motto!"
                                            </h5>
                                        </div>
                                        <div class="content">
                                            <div class="main">
                                                <h4 class="text-center">
                                                    Experince
                                                </h4>
                                                <p>
                                                    Yazan Baker was working with our team since April 2021.
                                                </p>
                                                <h4 class="text-center">
                                                    Areas of Expertise
                                                </h4>
                                                <p>
                                                    Web design, React.js, HTML5, CSS3, Node.js, PostgreSQL.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="footer1">
                                            <div class="social-links text-center">
                                                <SocialIcon className="social" url="https://www.linkedin.com/in/ethar-abed-alhaleem-4a0b05206/" />
                                                <SocialIcon className="social" url="https://github.com/yazanbaker94" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default AboutUs
