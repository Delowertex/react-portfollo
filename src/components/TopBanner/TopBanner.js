import React, {Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import '../../assets/css/Custom.css';
import '../../assets/css/bootstrap.min.css';

class TopBanner extends React.Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">Softwerar Engineer</h1>
                                    <h4 className="topSubTitle">Mobile & Web Aplication</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;