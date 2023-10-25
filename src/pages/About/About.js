import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import idea from "../../assets/015-idea.png";
import analysis from "../../assets/033-line bars.png";
import design from "../../assets/uiux.png";
import develop from "../../assets/web.png";
import Banner from "../../components/banner";
import DevelopProcess from "../services/develop-process";
import CtaBanner from "../../components/cta-banner";
import {Link} from "react-router-dom";
import Reveal from "react-reveal/Reveal";

function About() {
    return (
        <>
            <Banner
                className={"banner banner-about"}
                title={"About Page"}
                txt={"Get to know about OnSprint Global"}
            />
            <div className="container-fluid col-10 col-md-9 col-xl-8 p-0">
                <Reveal effect="fadeInUp">
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
                                    OnSprint Global based in Sri Lanka offering itcservices to all
                                    types of businesses.we take pride in our well-defined and
                                    effective methodology that ensures your IT projects are not
                                    only successful but also a seamless experience. Here's an
                                    in-depth look at how we work:
                                </p>

                                <Button
                                    variant="btn btn-primary"
                                    className="d-flex w-auto justify-content-center align-items-center service-btn"
                                    as={Link}
                                    to={"/services"}
                                >
                                    More Details{" "}
                                    <span className="material-symbols-rounded">
                    chevron_right
                  </span>
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
                                            <img src={idea} alt="idea" className="stage-img"/>
                                            <h5 className="mb-2 mt-3">Ideation</h5>
                                            <p>
                                                This stage is all about listening to your vision ,We
                                                encourage you to share your ideas and understanding your
                                                objectives.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="work-type">
                                            <img
                                                src={analysis}
                                                alt="analysis"
                                                className="stage-img"
                                            />
                                            <h5 className="mb-2 mt-3">Analysis</h5>
                                            <p>
                                                This phase helps us refine your project's objectives,
                                                establish timelines, and set realistic expectations.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="work-type">
                                            <img src={design} alt="design" className="stage-img"/>
                                            <h5 className="mb-2 mt-3">Design</h5>
                                            <p>
                                                Our talented designers work their magic to create
                                                visually appealing and user-friendly solutions.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="work-type">
                                            <img src={develop} alt="develop" className="stage-img"/>
                                            <h5 className="mb-2 mt-3">Develop</h5>
                                            <p>
                                                Our skilled developers crafting the functionalities,
                                                features, and coding that make your project unique.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Reveal>
            </div>
            <DevelopProcess/>
            <CtaBanner/>
        </>
    );
}

export default About;
