import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import whoweare from "../../assets/web-21.png";
import howweborn from "../../assets/web-14.png";
import idea from "../../assets/015-idea.png";
import analysis from "../../assets/033-line bars.png";
import design from "../../assets/uiux.png";
import develop from "../../assets/web.png";
import testing from "../../assets/029-target.png";
import Banner from "../../components/banner";

function About() {
    return (
        <>
            <Banner title={"Hello there , We are Sprinters"} txt={"Get to know about OnSprint Global"}/>
            <div className="container-fluid col-10 col-md-9 col-xl-8 p-0">
                <Row className="about-we-are pt-6 justify-content-between align-items-center">
                    <Col xl={5} md={5} sm={12}>
                        <Image src={whoweare} fluid width={500} alt="aboutimg"/>
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
                <Row className="about-how-born py-6 justify-content-between align-items-center">
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
                        <Image src={howweborn} fluid width={500} alt="howweborn"/>
                    </Col>
                </Row>
                <div className="justify-content-between align-items-center pb-6">
                    <h2 className="text-center">How We Work</h2>
                    <Row
                        xs={2}
                        md={5}
                        className="justify-content-between align-items-center mt-5"
                    >
                        <Col className="justify-content-center text-center align-items-center">
                            <div className="stages py-4 px-2">
                                <Image src={idea} fluid className="stage-img mb-3"/>
                                <h5>Ideation</h5>
                            </div>
                        </Col>
                        <Col className=" justify-content-center text-center align-items-center">
                            <div className="stages py-4 px-2">
                                <Image src={analysis} fluid className="stage-img mb-3"/>
                                <h5>Analysis</h5>
                            </div>
                        </Col>
                        <Col className=" justify-content-center text-center align-items-center">
                            <div className="stages py-4 px-2">
                                <Image src={design} fluid className="stage-img mb-3"/>
                                <h5>Design</h5>
                            </div>
                        </Col>
                        <Col className=" justify-content-center text-center align-items-center ">
                            <div className="stages py-4 px-2">
                                <Image src={develop} fluid className="stage-img mb-3"/>
                                <h5>Development</h5>
                            </div>
                        </Col>
                        <Col className=" justify-content-center text-center align-items-center">
                            <div className="stages py-4 px-2">
                                <Image src={testing} fluid className="stage-img mb-3"/>
                                <h5>Testing</h5>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default About;
