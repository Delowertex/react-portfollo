import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import weblogo from "../../assets/image/web.svg";
import mobilelogo from "../../assets/image/mobile.svg";
import graphicslogo from "../../assets/image/graphics.svg";

class Services extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <h1 className="serviceMainTatle">My Services</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={weblogo} alt="logo"/>
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDes">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={mobilelogo} alt="Mobilelogo"/>
                                <h2 className="serviceName">Mobile Development</h2>
                                <p className="serviceDes">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={graphicslogo} alt="Mobilelogo"/>
                                <h2 className="serviceName">Graphics Design</h2>
                                <p className="serviceDes">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Services;