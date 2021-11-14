import React, {Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';



class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    modalClose=()=>{
        this.setState({show: false})
    }
    modalOpen=()=>{
        this.setState({show: true})
    }
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <h1 className="videoTitle">How I Do</h1>
                            <p className="videoPara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make Lorem</p>
                            <p><FontAwesomeIcon icon={faPlayCircle} onClick={this.modalOpen}  className="iconPlay" /></p>
                        </Col>
                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;

