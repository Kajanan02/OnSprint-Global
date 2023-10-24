import React from "react";
import Banner from "../../components/banner";
import DevelopProcess from "./develop-process";
import CtaBanner from "../../components/cta-banner";
import { Col, Row } from "react-bootstrap";
import ServiceCard from "./service-card";
import serviceBanner from "../../assets/contWrite.png";
import { servicesContent } from "../../utils/content";
import Reveal from "react-reveal/Reveal";

function ContentWriting() {
  return (
    <>
      <Banner
        title={"Content Writing"}
        txt={"Get to know about OnSprint Global"}
        className={"banner banner-writing"}
      />
      <div className={"container-fluid col-10 col-md-9 col-xl-8 p-0"}>
        <div className={"py-xl-5 my-5"}>
          <Row className={"flex-column"}>
            <Reveal effect="fadeInUp">
              {servicesContent.map((data, index) => (
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
                  Elevate Your Digital Presence with Compelling Copy
                </div>
                <div>
                  <p className={"service-content-text"}>
                    By choosing OnSprint Global for your content writing needs,
                    you're partnering with a team of experts dedicated to
                    creating compelling and informative content that strengthens
                    your digital presence and drives your business goals.
                    Contact us today to discuss how our content writing services
                    can transform your online landscape and engage your audience
                    effectively.
                  </p>
                  <ul>
                    <li className={"service-content-text"}>Skilled Writers</li>
                    <li className={"service-content-text"}>
                      Quality and Originality
                    </li>
                    <li className={"service-content-text"}>Audience-Centric</li>
                    <li className={"service-content-text"}>SEO-Optimized</li>
                    <li className={"service-content-text"}>Timely Delivery</li>
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

export default ContentWriting;
