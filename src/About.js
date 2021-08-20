import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import { Timeline, Event } from "react-timeline-scribble";


const About = () => {
    return (
        <div className="aboutBody" id="about">
            <Container className="Contrainer">
                <Row className="Row-top">
                    <h3 style={{margin: '5rem 0 2.5rem 0', textAlign: 'center', lineHeight: '2rem'}}><hl>"Who"</hl> am <hg>I</hg> !?</h3><br/>
                </Row>
                <Row className="Row-timeline1">
                    <Col md={6} id="timeline1-L">
                        <h4 style={{marginBottom: '1rem',color: '#ccff00'}}>EDUCATION</h4>
                        <Timeline>
                            <Event interval={"High Voc. Technic Computer"} title={"ChiangMai Technical College"} subtitle={"2015-2017"}>
                            <img src="../assets/img/cmtc.png" id="img-resposive" />
                            </Event>
                            <Event interval={"Bachelor. Computer Engineering"} title={"Rajamangala University of Technology ChiangMai"} subtitle={"2017-2021"}>
                                <img src="../assets/img/rmutl.jpg" id="img-resposive" />
                            </Event>
                        </Timeline>
                    </Col>
                    <Col md={6} id="timeline1-R">
                        <h6 style={{margin: '2.5rem 0 2.5rem 0',textAlign: 'center',lineHeight: '1.5rem'}}>I'm  a <hg>recent graduate</hg> for 6 month.
                        spent the time to practice about tools of frontend-dev and accepted freelance jobs for a while.<br/>
                        <br/><hg>Now</hg>,I determine that i would like to gain experience working as a 'Team' in a <hl>Software Development Company</hl>.</h6>
                        <h4 style={{marginBottom: '1rem',color: '#ccff00'}}>EXPERIENCE</h4>
                        <Timeline>
                            <Event interval={"Internet installator intern"} title={"SINET FTTX Co.,ltd"} subtitle={"2017"}></Event>
                            <Event interval={"IOT Engineer intern"} title={"Donaus Co.,ltd"} subtitle={"2020"}></Event>
                            <Event interval={"UI & Graphic designer"} title={"Freelance & Job contract"} subtitle={"2021"}>
                             <img src="../assets/img/portrait2.png" id="img-resposive-myself" style={{transform: "scale(110%)"}} />
                            </Event>
                        </Timeline>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
