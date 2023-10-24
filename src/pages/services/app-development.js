import React from "react";
import Banner from "../../components/banner";
import DevelopProcess from "./develop-process";
import CtaBanner from "../../components/cta-banner";
import {Col, Row} from "react-bootstrap";
import ServiceCard from "./service-card";
import serviceBanner from "../../assets/services-banner.svg";
import {servicesApp} from "../../utils/content";

function AppDevelopment() {
    return (
        <>
            <Banner
                title={"App Development"}
                txt={"Get to know about OnSprint Global"}
                className={"banner banner-web"}
            />
            <div className={"container-fluid col-10 col-md-9 col-xl-8 p-0"}>
                <div className={"py-xl-5 my-5"}>
                    <Row className={"flex-column"}>
                        {servicesApp.map((data, index) => (
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
                                Turning Your Ideas into Digital Reality
                            </div>
                            <div>
                                <p className={"service-content-text"}>
                                    By choosing OnSprint Global for your app development needs,
                                    you're partnering with a team of experts dedicated to turning
                                    your ideas into digital reality. We believe in crafting mobile
                                    applications that are not only visually stunning but also
                                    highly functional, providing users with a memorable and
                                    enjoyable experience. Contact us today to discuss how our app
                                    development services can transform your digital landscape and
                                    drive your business to new heights.
                                </p>
                                <ul>
                                    <li className={"service-content-text"}>
                                        Experience and Expertise
                                    </li>
                                    <li className={"service-content-text"}>
                                        User-Centric Design
                                    </li>
                                    <li className={"service-content-text"}>
                                        Responsive and Scalable
                                    </li>
                                    <li className={"service-content-text"}>
                                        Testing and Quality Assurance
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

export default AppDevelopment;
