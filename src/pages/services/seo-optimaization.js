import React from "react";
import Banner from "../../components/banner";
import DevelopProcess from "./develop-process";
import CtaBanner from "../../components/cta-banner";
import {Col, Row} from "react-bootstrap";
import ServiceCard from "./service-card";
import serviceBanner from "../../assets/services-banner.svg";
import {servicesSeo} from "../../utils/content";

function SeoOptimaization() {
    return (
        <>
            {" "}
            <Banner
                title={"SEO Services"}
                txt={"Get to know about OnSprint Global"}
                className={"banner banner-web"}
            />
            <div className={"container-fluid col-10 col-md-9 col-xl-8 p-0"}>
                <div className={"py-xl-5 my-5"}>
                    <Row className={"flex-column"}>
                        {servicesSeo.map((data, index) => (
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
                                Why Choose OnSprint Global
                            </div>
                            <div className={"service-content-heading"}>
                                Elevate Your Online Visibility and Drive Organic Growth
                            </div>
                            <div>
                                <p className={"service-content-text"}>
                                    By choosing OnSprint Global for your SEO needs, you're
                                    partnering with a team of experts dedicated to improving your
                                    online visibility and achieving your business goals. Contact
                                    us today to explore how our SEO services can transform your
                                    digital landscape and drive your business to new heights.
                                </p>
                                <ul>
                                    <li className={"service-content-text"}>
                                        Proven Track Record
                                    </li>
                                    <li className={"service-content-text"}>Ethical Practices</li>
                                    <li className={"service-content-text"}>
                                        Customized Strategies:
                                    </li>
                                    <li className={"service-content-text"}>
                                        Data-Driven Approach
                                    </li>
                                    <li className={"service-content-text"}>Ongoing Support</li>
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

export default SeoOptimaization;
