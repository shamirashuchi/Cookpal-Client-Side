import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../LeftNav/LeftNav';
import RightNav from '../RightNav/RightNav';
import Middle from '../../Middle/Middle';
const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}>
                         <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Middle></Middle>
                    </Col>
                    <Col lg={3}>
                       <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;