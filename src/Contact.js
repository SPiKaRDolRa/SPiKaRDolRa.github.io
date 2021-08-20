import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

import { RiGithubFill, RiFacebookBoxFill, RiInstagramFill, RiEarthFill} from "react-icons/ri";

const Contact = () => {
    return (
        <div className="contactBody" id="contact">
            <Container className="contact-title">
                <Row className="text">CONTACT</Row>
                <Row className="arrow"></Row>
                <Row className="arrow"></Row>          
            </Container>
            <Container className="contact-number">
                <div className="backnumber">
                    <Row className="number">Phone Number :<br/> (66+)088-2605405</Row>
                    <Row className="email">Email :<br/> become_aum@hotmail.com</Row>
                </div>
            </Container>
            <Container className="contact-link">
                <Row className="row-link">
                    <Col className="col-link"><a href="#"><RiEarthFill /></a></Col>
                    <Col className="col-link"><a href="https://www.facebook.com/a.indytanapunt" target="_blank"><RiFacebookBoxFill /></a></Col>
                    <Col className="col-link"><a href="https://www.instagram.com/aum.tanapunt/" target="_blank"><RiInstagramFill /></a></Col>
                    <Col className="col-link"><a href="https://github.com/SPiKaRDolRa" target="_blank"><RiGithubFill /></a></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
