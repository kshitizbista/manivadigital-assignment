import React from 'react';
import './LandingPage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppNavBar from '../NavBar/AppNavbar';

function LandingPage() {
    return (
        <Container fluid className="banner">
            <Row>
                <Col sm="12">
                    <AppNavBar></AppNavBar>
                </Col>
                <Col className="info">
                    <h1 className="text-center">Welcome To Maniva Digital</h1>
                    <p className="text-center">
                        Mobile App & Website Development | IT-Consultation | Data Analysis
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingPage;
