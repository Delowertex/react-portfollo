import React, {Fragment} from 'react';
import {Col, Container, NavLink, Row} from "react-bootstrap";
import student from "../../assets/image/istockphoto.jpg";

class Courses extends React.Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="serviceMainTatle">Our Courses</h1>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={student} alt="Student" height="162" width="317" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="projectCardTitle">Web Development</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the </p>
                                    <NavLink to="/details" className="details">Details</NavLink>
                                </Col>

                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={student} alt="Student" height="162" width="317" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="projectCardTitle">Web Development</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the </p>
                                    <NavLink to="/details" className="details">Details</NavLink>
                                </Col>

                            </Row>
                        </Col>
                    </Row> <br/>

                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={student} alt="Student" height="162" width="317" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="projectCardTitle">Web Development</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the </p>
                                    <NavLink to="details" className="details">Details</NavLink>
                                </Col>

                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={student} alt="Student" height="162" width="317" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="projectCardTitle">Web Development</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the </p>
                                    <NavLink to="/details" className="details">Details</NavLink>
                                </Col>

                            </Row>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default Courses;