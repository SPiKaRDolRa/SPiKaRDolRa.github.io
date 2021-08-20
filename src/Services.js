import React, { Component } from 'react'
import Slider from 'react-slick'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { RiArticleLine, RiDraftLine } from "react-icons/ri";
import { GiAbstract089 } from "react-icons/gi";

class Services extends Component {
    render() {
        var settings = {
            arrows: 0,
            infinite: true,
            autoplay: true,
            autoplaySpped: 500,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
            ]   
          };
        return (
            <>
            <div className="servicesBody" id="services">
            <Container className="Contrainer">
                <Row className="Row-services">
                    <h3 style={{margin: '5rem 0 5rem 0', textAlign: 'center'}}>What <hg>"Services"</hg> you can get from me !?</h3>
                    <Col className="Col-services" lg={4} md={6} sm={6}>
                        <Card id="card-services">
                            <div className="frame-img">
                                <div className="img-services"><RiArticleLine /></div>
                            </div>
                            <Card.Body className="body-services">
                                <Card.Title className="title-services">Front-End Programming</Card.Title>
                                    <Card.Text style={{fontSize: '12px'}}>
                                        I practiced in key front-end languages (HTML5, CSS, JavaScript) and frameworks
                                        like React, Node.js and Bootstrap. <br />(Never forget to keep practicing Vue and Sass)
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="Col-services" lg={4} md={6} sm={6}>
                        <Card id="card-services">
                            <div className="frame-img">
                                <div className="img-services"><RiDraftLine /></div>
                            </div>
                            <Card.Body className="body-services">
                                <Card.Title className="title-services">UI Design Services</Card.Title>
                                    <Card.Text style={{fontSize: '12px'}}>
                                        I can construct responsive GUI that include highly responsive elements,
                                        Aim to provide an organic, unified user experience through custom UI development services.
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="Col-services" lg={4} md={6} sm={6}>
                        <Card id="card-services">
                            <div className="frame-img">
                                <div className="img-services"><GiAbstract089 /></div>
                            </div>
                            <Card.Body className="body-services">
                                <Card.Title className="title-services">IA Wireframing</Card.Title>
                                    <Card.Text style={{fontSize: '12px'}}>
                                        Design best way to organize and structure the content and data of the web and mobile apps.
                                        I analyze the user behavior and actions, as well as their incentives, to create an appropriate solution.
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
            <div className="sectionTopic">
                <div className="boxTopic">
                    <div className="textTopic-L">
                            Frontend Tools
                    </div>
                </div>
            </div>
            <div className="servicesSlice">
                <Row className="Container" style={{transform: "translate(0, 12px)"}}>
                    <Slider {...settings}>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/html5.png" />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/CSS3.png" />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/JS.png" />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/React.png" style={{transform: "scale(90%)"}} />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/bootstrap.png" style={{transform: "scale(80%)"}} />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/figma.png" style={{transform: "scale(120%)"}} />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/vue.png" style={{transform: "scale(70%)"}} />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/sass.png" style={{transform: "scale(70%)"}} />
                        </div>
                    </Slider>
                </Row>
            </div>
            <div className="sectionTopic" style={{flexDirection: 'row-reverse'}}>
                <div className="boxTopic">
                    <div className="textTopic-R">
                            Backend Tools
                    </div>
                </div>
            </div>
            <div className="servicesSlice" id="backend">
                <Row className="Container" style={{transform: "translate(0, 12px)"}}>
                    <Slider {...settings}>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/js.png" />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/nodejs.png" style={{transform: "scale(85%)"}}/>
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/python.png" style={{transform: "scale(140%)"}} />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/Django.png" style={{transform: "scale(80%)"}} />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/c++.png" style={{transform: "scale(90%)"}} />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/Linux.png" style={{transform: "scale(130%)"}} />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/google-cloud.png" style={{transform: "scale(110%)"}} />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/AWS.png" style={{transform: "scale(110%)"}} />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/firebase.png" style={{transform: "scale(110%)"}} />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/git.png" style={{transform: "scale(50%)"}} />
                        </div>
                        <div className="section-slider">
                            <img id="photo-slider" src="../assets/img/github.png" style={{transform: "scale(80%)"}} />
                        </div>
                    </Slider>
                </Row>
            </div>
            </>
        )
    }
}

export default Services