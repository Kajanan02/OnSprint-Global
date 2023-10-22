import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import idea from "../../assets/015-idea.png";
import analysis from "../../assets/033-line bars.png";
import design from "../../assets/uiux.png";
import develop from "../../assets/web.png";
import Banner from "../../components/banner";
import WebDevelopProcess from "../services/web-develop-process";

function About() {
  return (
    <>
      <Banner
        className={"banner banner-about"}
        title={"Hello there , We are Sprinters"}
        txt={"Get to know about OnSprint Global"}
      />
      <div className="container-fluid col-10 col-md-9 col-xl-8 p-0">
        <div className="justify-content-between align-items-center my-6">
          <Row
            xs={1}
            md={2}
            className=" g-2 gap-md-0 gap-5 justify-content-between align-items-cente"
          >
            <Col xs={12} md={5}>
              <p className="fw-medium">How We Work</p>
              <h2>
                We Work As a Team And Provide Quality Product What You Want
              </h2>
              <p className="mt-2 mb-4">
                OnSprint Global based in Sri Lanka offering web design, SEO,
                PPC, and social media marketing services to all types of
                businesses all around the world for over 5+ years. We have a
                team of digital experts that go above and beyond to give quality
                service to our clients and help them take their business to the
                next level online.
              </p>
              <Button
                variant="primary"
                className="service-btn d-flex align-items-center px-3 rounded-5 py-2"
              >
                More Details{" "}
                <span className="material-symbols-rounded">chevron_right</span>
              </Button>
            </Col>
            <Col xs={12} md={6}>
              <Row
                xs={1}
                md={2}
                className="g-5 justify-content-between align-items-cente"
              >
                <Col>
                  <div className="work-type">
                    <img src={idea} alt="idea" className="stage-img" />
                    <h5 className="my-2">Ideation</h5>
                    <p>
                      Get idea about what type of product is and start to next
                      step
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="work-type">
                    <img src={analysis} alt="analysis" className="stage-img" />
                    <h5 className="my-2">Analysis</h5>
                    <p>
                      Get idea about what type of product is and start to next
                      step
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="work-type">
                    <img src={design} alt="design" className="stage-img" />
                    <h5 className="my-2">Design</h5>
                    <p>
                      Get idea about what type of product is and start to next
                      step
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="work-type">
                    <img src={develop} alt="develop" className="stage-img" />
                    <h5 className="my-2">Develop</h5>
                    <p>
                      Get idea about what type of product is and start to next
                      step
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <WebDevelopProcess />

        {/* <Row className="about-we-are pb-5 justify-content-between align-items-center">
          <Col xl={5} md={5} sm={12}>
            <Image src={whoweare} fluid width={500} alt="aboutimg" />
          </Col>
          <Col xl={6} md={6} sm={12}>
            <h2>Who We Are</h2>
            <p className="mt-3">
              OnSprint Global based in Sri Lanka offering web design, SEO, PPC,
              and social media marketing services to all types of businesses all
              around the world for over 5+ years. We have a team of digital
              experts that go above and beyond to give quality service to our
              clients and help them take their business to the next level
              online.
            </p>
          </Col>
        </Row>
        <Row className="about-how-born pb-5 justify-content-between align-items-center">
          <Col xl={6} md={6} sm={12}>
            <h2>How We Born</h2>
            <p className="mt-3">
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
        </Row> */}
      </div>
    </>
  );
}

export default About;
