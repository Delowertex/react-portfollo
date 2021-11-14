import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "../../assets/css/Custom.css";
import "../../assets/css/bootstrap.min.css";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topPagedBanner p-0">
                    <div className="topPageOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h4 className="topSubTitle">{this.props.pagetitle}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;