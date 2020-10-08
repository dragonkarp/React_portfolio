import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";


function ProjectCard() {
    return (
        <Container fluid>
            <Row><h3>Weather Dash Board</h3></Row>
            <Row>
                <Col>
                    <img src="../../assets/WeatherDB.png" alt="Weather Dash Board screen shot" id="weather-app-img" />
                </Col>
                <Col>
                    <Button variant="dark">GitHub</Button> <br/><br/><br/>
                    <Button variant="dark">Deployed</Button>
                </Col>
            </Row>
        </Container>
  );
};

export default ProjectCard;