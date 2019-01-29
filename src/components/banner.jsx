import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Banner = () => (
    <Container fluid>
        <Row>
            <Col>
                <img src="/images/banner.jpg" className="img-fluid" alt="banner" />;
            </Col>
        </Row>
    </Container>
);

export default Banner;
