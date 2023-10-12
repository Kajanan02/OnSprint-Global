import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header>
            <div className="container-fluid col-10 col-md-9 col-xl-8 p-0 mt-2 mt-md-4 align-items-center">
                <Row className="justify-content-between align-items-center gap-md-0 gap-2">
                    <Col md={12}>
                        <p className="mb-3 header-parah">Who We Are</p>
                        <h1 className="display-1 fw-bold">
                            We <span className="header-highlight">Build & Design</span>{" "}
                            Great Technology For Your Business
                        </h1>
                        <p className="mt-md-3 mb-5 header-parah">
                            OnSprint Glogal builds and manages high-performing software
                            development teams to bring big ideas to life. Whether you want
                            to extend your in-house team or need assistance with developing,
                            quality assuring, or supporting your application, we can help.
                        </p>
                        <div className="d-flex flex-md-nowrap flex-wrap gap-3">
                            <Button variant="primary" className="header-btn" size="lg" as={Link} to={"/contact"}>
                                Let's Talk
                            </Button>{" "}
                            <Button variant="outline-primary" className="header-btn" size="lg" as={Link}
                                    to={"/services"}>
                                Learn More
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </header>
    );
}

export default Header;