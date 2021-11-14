import React, {Fragment} from 'react';
import {Col, Container, NavLink, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faYoutube }  from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
    render() {
        return (
            <Fragment>
                <Container className="footerSection text-center">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 foterPara">
                            <h2 className="serviceName">Fellow Me</h2>
                            <p className="p-0 m-0"><FontAwesomeIcon icon={faFacebook} className="iconColor" /> Facebook</p>
                            <p className="p-0 m-0" ><FontAwesomeIcon icon={faYoutube} className="iconColor" /> YouTube</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 foterPara">
                            <h2 className="serviceName">Address</h2>
                            <p className="p-0 m-0 clientPara" >100, west rasulpor, dania, Dhaka.</p>
                            <p className="p-0 m-0 clientPara"><FontAwesomeIcon icon={faEnvelope} className="iconColor" /> delower.com</p>
                            <p className="p-0 m-0 clientPara"><FontAwesomeIcon icon={faPhone} className="iconColor" /> 01728984157</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 foterPara" >
                            <h2 className="serviceName">Information</h2>
                            <NavLink className="p-0 m-0 footerLink">About Me</NavLink>
                            <NavLink className="p-0 m-0 footerLink">My Resume</NavLink>
                            <NavLink className="p-0 m-0 footerLink">Contact Me</NavLink>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 foterPara">
                            <h2 className="serviceName">Legal</h2>
                            <NavLink className="p-0 m-0 footerLink">Refund Policy</NavLink>
                            <NavLink className="p-0 m-0 footerLink">Terms & Condition</NavLink>
                            <NavLink className="p-0 m-0 footerLink">Privacy Policy</NavLink>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="copyRight">
                            <NavLink className="copyRightLink">Delower Hossain &copy; 2021</NavLink>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;