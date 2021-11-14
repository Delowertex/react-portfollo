import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "../../assets/css/bootstrap.min.css";

class AboutDescription extends React.Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Hellow I am</h1>
                            <hr />
                            <p className="serviceDes">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.</p>

                            <h1 className="serviceName">My Vision</h1>
                            <hr />
                            <p className="serviceDes">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.</p>
                            <h1 className="serviceName">My Mission</h1>
                            <hr />
                            <p className="serviceDes">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;