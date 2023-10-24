import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

function CtaBanner(props) {
  return (
    <div className="container-fluid col-10 col-md-9 col-xl-8 px-0 align-items-center my-6">
      <Reveal effect="fadeInUp">
        <div className={"p-3 p-xl-1"}>
          <Row className="bg-primary px-4 py-5 text-start justify-content-between align-items-center rounded-5 ">
            <Col md={9} className="mb-md-0 mb-3 footer-top-text">
              <h2 className="text-white fw-bold">
                Work Together with OnSprint Global
              </h2>
              <p className="text-white-50 p-0">
                Our company is a very professional company, with friendly
                service, modern Design and Quality product
              </p>
            </Col>
            <Col
              md={3}
              className="p-0 d-flex justify-content-md-center justify-content-start"
            >
              <Button
                variant="light"
                className="header-btn text-primary fw-bold"
                size="lg"
                as={Link}
                to={"/contact"}
              >
                Let's Talk
              </Button>
            </Col>
          </Row>
        </div>
      </Reveal>
    </div>
  );
}

export default CtaBanner;
