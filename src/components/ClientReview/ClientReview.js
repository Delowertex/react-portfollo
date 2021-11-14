import React, {Fragment} from 'react';
import "../../assets/css/slick.min.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import client from "../../assets/image/cat.webp";

class ClientReview extends React.Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            infinite: true,
            speed: 2000,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTatle">Client Says</h1>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div>
                                <Slider {...settings}>
                                    <div className="clientSection" >
                                        <img src={client} alt="client" className="circleImage" />
                                        <h3>Web Development</h3>
                                        <p className="clientPara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley</p>
                                    </div>
                                    <div>
                                        <img src={client} alt="client" className="circleImage" />
                                        <h3>Web Development</h3>
                                        <p className="clientPara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley</p>
                                    </div>
                                    <div>
                                        <img src={client} alt="client" className="circleImage" />
                                        <h3>Web Development</h3>
                                        <p className="clientPara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley</p>
                                    </div>
                                    <div>
                                        <img src={client} alt="client" className="circleImage" />
                                        <h3>Web Development</h3>
                                        <p className="clientPara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley</p>
                                    </div>

                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ClientReview;