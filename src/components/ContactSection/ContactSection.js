import React, {Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends React.Component {
    render() {
        return (
            <Fragment>
                <Container className="contactSection">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1>Quick Connect</h1> <hr />
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>

                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1>Discuss Now</h1>
                            <p className="p-0 m-0 clientPara" >100, west rasulpor, dania, Dhaka.</p>
                            <p className="p-0 m-0 clientPara"><FontAwesomeIcon icon={faEnvelope} className="iconColor" /> delower.com</p>
                            <p className="p-0 m-0 clientPara"><FontAwesomeIcon icon={faPhone} className="iconColor" /> 01728984157</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;