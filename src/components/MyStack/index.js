import React from "react";
import { Container, Row, Col } from "react-bootstrap"

function MyStack() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h4>The Browser</h4>
                    HTML <br/>
                    CSS <br/>
                    jQuery <br/>
                    Javascript MySQL <br/>
                    React.js
                    React Bootstrap
                    Bootstrap
                    
                </Col>
                <Col>
                    <h4>API Interqactions</h4>
                    JSON <br/>
                    AJAX <br/>
                </Col>
                <Col>
                    <h4>Databases</h4>
                    MySQL <br/>
                    MongoDB
                </Col>
                <Col>
                    <h4>Server Side</h4>
                    Node.js <br/>
                    Express.js <br/>
                    Creating APIs <br/>
                    MVC <br/>
                    ORM (Sequalize)
                </Col>
            </Row>
        </Container>
  );
};

export default MyStack;