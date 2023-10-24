import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

function Header(props) {
  return (
    <header className={"bg-navbar"}>
      <div className="container-fluid col-10 col-md-9 col-xl-8 p-0">
        <Row className="justify-content-between align-items-center mt-4 mt-md-0 gap-md-0 gap-4">
          <Col
            md={12}
            xs={12}
            className="text-center justify-content-center align-items-center"
          >
            <Reveal effect="fadeInUp">
              <p className="mb-3 header-parah">Who We Are</p>
              <h1 className="display-2 fw-bold">
                We <span className="header-highlight">Build & Design</span>{" "}
                Great Technology For Your Business
              </h1>
            </Reveal>
            <Reveal effect="fadeInUp">
              <p className="mt-md-3 mb-5 header-parah">
                At OnSprint Glogal, we specialize in crafting digital
                experiences that resonate with your audience. With a blend of
                creativity, technology, and expertise, we offer a comprehensive
                suite of IT services designed to elevate your online presence
                and boost your business.we are your one-stop solution for all
                your digital needs.
              </p>
            </Reveal>
            <Reveal effect="fadeInUp">
              <div className="d-flex flex-md-nowrap flex-wrap gap-3 justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className="header-btn"
                  size="lg"
                  as={Link}
                  to={"/contact"}
                >
                  Let's Talk
                </Button>{" "}
                <Button
                  variant="outline-primary"
                  className="header-btn"
                  size="lg"
                  as={Link}
                  to={"/services"}
                >
                  Learn More
                </Button>
              </div>
            </Reveal>
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default Header;
