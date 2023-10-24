import React from "react";
import Banner from "../../components/banner";
import DevelopProcess from "./develop-process";
import CtaBanner from "../../components/cta-banner";
import {Col, Row} from "react-bootstrap";
import ServiceCard from "./service-card";
import serviceBanner from "../../assets/services-banner.svg";
import {servicesDesigning} from "../../utils/content";

function UiuxDesigning() {
    return (
        <>
            <Banner
                title={"UI / UX Designing"}
                txt={"Get to know about OnSprint Global"}
                className={"banner banner-web"}
            />
            <div className={"container-fluid col-10 col-md-9 col-xl-8 p-0"}>
                <div className={"py-xl-5 my-5"}>
                    <Row className={"flex-column"}>
                        {servicesDesigning.map((data, index) => (
                            <Col key={index + "Services"}>
                                <ServiceCard data={data}/>
                            </Col>
                        ))}
                    </Row>
                </div>

                <div className={"py-xl-5 my-xl-5 pb-5"}>
                    <div className={"row px-xl-5"}>
                        <div className={"col-md-6 pb-5"}>
                            <img
                                src={serviceBanner}
                                alt={"serviceBanner"}
                                className={"img-fluid"}
                            />
                        </div>
                        <div className={"col-md-6"}>
                            <div className={"service-content-text"}>
                                Why Choose OnSprint Global for UI-UX Design
                            </div>
                            <div className={"service-content-heading"}>
                                Crafting Exceptional Digital Experiences
                            </div>
                            <div>
                                <p className={"service-content-text"}>
                                    By choosing OnSprint Global for your UI-UX design needs,
                                    you're partnering with a team of experts who are dedicated to
                                    creating digital experiences that leave a lasting impact. We
                                    are committed to ensuring that your digital platforms are not
                                    only visually stunning but also highly functional, providing
                                    users with a memorable and enjoyable experience.
                                </p>
                                <ul>
                                    <li className={"service-content-text"}>
                                        Collaborative Approach
                                    </li>
                                    <li className={"service-content-text"}>
                                        Data-Driven Decisions
                                    </li>
                                    <li className={"service-content-text"}>
                                        Responsive and Cross-Platform
                                    </li>
                                    <li className={"service-content-text"}>
                                        Continuous Iteration
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DevelopProcess/>
            <CtaBanner/>
        </>
    );
}

export default UiuxDesigning;
