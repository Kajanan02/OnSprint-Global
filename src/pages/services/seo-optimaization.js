import React from "react";
import Banner from "../../components/banner";
import DevelopProcess from "./develop-process";
import CtaBanner from "../../components/cta-banner";
import { Col, Row } from "react-bootstrap";
import ServiceCard from "./service-card";
import serviceBanner from "../../assets/seoServ.png";
import { servicesSeo } from "../../utils/content";
import Reveal from "react-reveal/Reveal";

function SeoOptimaization() {
  return (
    <>
      {" "}
      <Banner
        title={"SEO Services"}
        txt={"Get to know about OnSprint Global"}
        className={"banner banner-seo"}
      />
      <div className={"container-fluid col-10 col-md-9 col-xl-8 p-0"}>
        <div className={"py-xl-5 my-5"}>
          <Row className={"flex-column"}>
            <Reveal effect="fadeInUp">
              {servicesSeo.map((data, index) => (
                <Col key={index + "Services"}>
                  <ServiceCard data={data} />
                </Col>
              ))}
            </Reveal>
          </Row>
        </div>

        <div className={"py-xl-5 my-xl-5 pb-5"}>
          <div className={"row justify-content-between align-items-center p-0"}>
            <Reveal effect="fadeInUp">
              <div className={"col-md-6 pb-5"}>
                <img
                  src={serviceBanner}
                  alt={"serviceBanner"}
                  className={"img-fluid"}
                />
              </div>
              <div className={"col-md-6"}>
                <div className={"service-content-text"}>Why Choose us</div>
                <div className={"service-content-heading"}>
                  Elevate Your Online Visibility and Drive Organic Growth
                </div>
                <div>
                  <p className={"service-content-text"}>
                    By choosing OnSprint Global for your SEO needs, you're
                    partnering with a team of experts dedicated to improving
                    your online visibility and achieving your business goals.
                    Contact us today to explore how our SEO services can
                    transform your digital landscape and drive your business to
                    new heights.
                  </p>
                  <ul>
                    <li className={"service-content-text"}>
                      Proven Track Record
                    </li>
                    <li className={"service-content-text"}>
                      Ethical Practices
                    </li>
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
            </Reveal>
          </div>
        </div>
      </div>
      <DevelopProcess />
      <CtaBanner />
    </>
  );
}

export default SeoOptimaization;
