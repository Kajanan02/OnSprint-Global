import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function CtaBanner(props) {
    return (
        <div className="cta-banner">
            <div
                className="container-fluid col-10 col-md-9 col-xl-8 p-0 align-items-center my-6">
                <Row
                    className="bg-primary px-4 py-5 text-start justify-content-between align-items-center rounded-5 ">
                    <Col md={9} className="mb-md-0 mb-3 footer-top-text">
                        <h1 className="text-white fw-bold">
                            Work Together with OnSprint Global
                        </h1>
                        <p className="text-white-50">
                            Our company is a very professional company, with friendly
                            service, modern Design and Quality product
                        </p>
                    </Col>
                    <Col md={3}>
                        <Button variant="light" className="header-btn text-primary fw-bold" size="lg" as={Link}
                                to={"/contact"}>
                            Let's Talk
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default CtaBanner;