import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {Technology: 'java', Project: 100},
                {Technology: 'php', Project: 50},
                {Technology: 'larvel', Project: 80},
                {Technology: 'kotlin', Project: 60},
                {Technology: 'dotnet', Project: 90},
                {Technology: 'python', Project: 50},
                {Technology: 'reat', Project: 70},
                {Technology: 'angular', Project: 90},
            ]
        }
    }
    render() {
        let blue = "rgba(0,115,230,0.8)";
        return (
            <Fragment>
                <Container>
                    <h1 className="serviceMainTatle">Technology Used</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={100} height={130} data={this.state.data}>
                                    <XAxis dataKey="Technology" />
                                    <Tooltip />
                                    <Bar dataKey="Project" fill={blue} />
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="chartDes">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.  It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;