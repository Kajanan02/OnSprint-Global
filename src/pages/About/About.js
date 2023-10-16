import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import whoweare from "../../assets/web-21.png";
import howweborn from "../../assets/web-14.png";

function About() {
  return (
    <>
      <div className="about-sec-head gap-2">
        <h1 className="display-3 fw-bold text-white text-center">
          Hello there , We are Sprinters
        </h1>
        <p className="text-white-50">Get to know about OnSprint Global</p>
      </div>
      <div className="container-fluid col-10 col-md-9 col-xl-8 p-0">
        <Row className="about-we-are pt-6 justify-content-between align-items-center">
          <Col xl={5} md={5} sm={12}>
            <Image src={whoweare} fluid width={500} alt="aboutimg" />
          </Col>
          <Col xl={6} md={6} sm={12}>
            <h2>Who We Are</h2>
            <p>
              OnSprint Global based in Sri Lanka offering web design, SEO, PPC,
              and social media marketing services to all types of businesses all
              around the world for over 5+ years. We have a team of digital
              experts that go above and beyond to give quality service to our
              clients and help them take their business to the next level
              online.
            </p>
          </Col>
        </Row>
        <Row className="about-how-born py-6 justify-content-between align-items-center">
          <Col xl={6} md={6} sm={12}>
            <h2>How We Born</h2>
            <p>
              OnSprint Global based in Sri Lanka offering web design, SEO, PPC,
              and social media marketing services to all types of businesses all
              around the world for over 5+ years. We have a team of digital
              experts that go above and beyond to give quality service to our
              clients and help them take their business to the next level
              online.
            </p>
          </Col>
          <Col xl={5} md={5} sm={12}>
            <Image src={howweborn} fluid width={500} alt="howweborn" />
          </Col>
        </Row>
        <Row className="about-we-process pb-6 justify-content-between align-items-center">
          <h2>How We Work</h2>
          <Col></Col>
        </Row>
      </div>
    </>
  );
}

export default About;
