import React from "react";
import Banner from "../../components/banner";
import { servicesWeb } from "../../utils/content";
import ServiceCard from "./service-card";
import serviceBanner from "../../assets/services-banner.svg";
import DevelopProcess from "./develop-process";
import CtaBanner from "../../components/cta-banner";
import { Col, Row } from "react-bootstrap";

function WebDevelopment(props) {
  return (
    <>
      <Banner
        title={"Web Development"}
        txt={"Get to know about OnSprint Global"}
        className={"banner banner-web"}
      />
      <div className={"container-fluid col-10 col-md-9 col-xl-8 p-0"}>
        <div className={"py-xl-5 my-5"}>
          <Row className={"flex-column"}>
            {servicesWeb.map((data, index) => (
              <Col className="p-0" key={index + "Services"}>
                <ServiceCard data={data} />
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
              <div className={"service-content-text"}>What we do</div>
              <div className={"service-content-heading"}>
                Empowering Innovation and Transformation
              </div>
              <div>
                <p className={"service-content-text"}>
                  Welcome to OnSprint Global! We are on a mission to shape the
                  future through inventive solutions and transformative
                  technologies that push the boundaries of what's possible.
                </p>
                <ul>
                  <li className={"service-content-text"}>
                    We collaborate to harness the potential of your ideas,
                    turning them into reality.
                  </li>
                  <li className={"service-content-text"}>
                    We lead change through user-centric designs and strategies
                    that create meaningful impact.
                  </li>
                  <li className={"service-content-text"}>
                    We empower businesses with cutting-edge solutions that drive
                    growth and pave the path to success.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DevelopProcess />
      <CtaBanner />
    </>
  );
}

export default WebDevelopment;
