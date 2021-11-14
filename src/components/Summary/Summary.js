import React, {Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CountUp from "react-countup";

class Summary extends React.Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="SummaryBanner summarySection p-0">
                    <div className="SummaryBannerOverlay">
                        <Container className="text-center">
                            <Row>
                                <Col lg={8} md={6} sm={6}>
                                    <Row className="countSection">
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <div>
                                                            <span ref={countUpRef} />
                                                            <button onClick={start}>Start</button>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Total Project</h4>
                                            <hr className="borderRow"/>
                                        </Col>
                                        <Col>
                                            <h1 className="countNumber">100</h1>
                                            <h4 className="countTitle">Total Client</h4>
                                            <hr className="borderRow"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className="cardSection">
                                            <Card.Title className="cartTitle">How I Work</Card.Title>
                                            <div>
                                                <p className="cardSubTitle"><FontAwesomeIcon icon={faCheckCircle} className="iconColor" /> Requirement Geadering</p>
                                                <p className="cardSubTitle"><FontAwesomeIcon icon={faCheckCircle}  className="iconColor" /> System Analysis</p>
                                                <p className="cardSubTitle"><FontAwesomeIcon icon={faCheckCircle}  className="iconColor" /> Coading Testing</p>
                                                <p className="cardSubTitle"><FontAwesomeIcon icon={faCheckCircle}  className="iconColor" /> Implement</p>
                                            </div>

                                    </Card>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;