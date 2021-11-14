import React, {Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import loptop from "../../assets/image/workplace.webp";

class RecentProject extends React.Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="serviceMainTatle">Recent Project</h1>
                    <Row className="text-center">
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={loptop} width="60%" height="300" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectDesc">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={loptop} width="60%" height="300" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectDesc">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={loptop} width="60%" height="300" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectDesc">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProject;