import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

import Services from './Services'
import About from './About'
import Contact from './Contact'

const Main = () => {
    return (
        <>
        <div className="mainBody">
            <Container className="Contrainer">
                <Row className="Row">
                    <Col md={6} id="left-Banner">
                        <h5>GET READY SOLUTION DESIGN</h5>
                        <h2>I'm Developer<br />Tanapunt Phecharut</h2>
                        <h6>I like to <hl>Coding</hl> and <hl>Graphic design</hl>.</h6>
                        <p>First focus on UI Developer try to
                            better and keep the knowledge
                            up-to-date. Afterward I intend to 
                            be a Full-Stack Developer in the future.
                        </p>
                    </Col>
                    <Col md={6} id="right-Banner">
                        <div className="photo"></div>
                    </Col>
                </Row>
            </Container>
        </div>
        <About />
        <Services />
        <Contact />
        </>
    )
}

export default Main
