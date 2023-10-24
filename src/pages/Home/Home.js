import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import whoWeAre from "../../assets/web-31.png";
import Header from "./header";
import CtaBanner from "../../components/cta-banner";
import ServicesHome from "./services-home";
import Faq from "./faq";

function Home() {
  return (
    <>
      <Header />
      <div className="establish bg-light">
        <div className="container-fluid col-10 col-md-9 col-xl-8 px-0 py-6 align-items-center">
          <Row className="justify-content-between align-items-center gap-md-0 gap-2">
            <Col md={6}>
              <Image
                src={whoWeAre}
                className="who-we-are"
                fluid
                alt="who-we-are"
              />
            </Col>
            <Col md={6}>
              <p className="mb-2">Who We Are</p>
              <h2 className="fw-bold">
                Empowering Innovation and Transformation
              </h2>
              <p className="mt-3 mb-5">
                Welcome to OnSprint Global!, we are dedicated to empowering
                businesses with cutting-edge IT solutions that transcend
                boundaries. Our journey is marked by a passion for technology,
                innovation, and a relentless pursuit of excellence. As your IT
                solutions partner, we offer a range of services designed to
                elevate your digital presence and drive your business forward.
                <br />
                <li className="mt-4">
                  We don't just provide solutions; we craft strategies that
                  align with your business objectives.
                </li>
                <li className="mt-2">
                  we pride ourselves on staying at the forefront of industry
                  trends
                </li>
                <li className="mt-2">
                  We empower businesses with cutting-edge solutions that drive
                  growth and pave the path to success.
                </li>
              </p>
              <Button variant="btn btn-primary" as={Link} to={"/contact"}>
                Let's Talk
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <ServicesHome />
      <Faq />
      <CtaBanner />
    </>
  );
}

export default Home;
