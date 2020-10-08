import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import "./style.css";


function IntroBox() {
    return (
        <Container fluid>
            <Row>
                <Col> 
                    <img src="../../assets/headshot.png" alt="Mike's beautiful face." id="headshot"/> 
                </Col>
                <Col>
                    <h1 class="intro-text">Hi! I'm Michael. Hope you like my stuff!</h1>
                    <p class="intro-text">I studied computer science in college. Since then I've been a Genius Bar 
                    team member at Apple Grand Central. </p>
                </Col>
            </Row>
        </Container>
  );
};

export default IntroBox;