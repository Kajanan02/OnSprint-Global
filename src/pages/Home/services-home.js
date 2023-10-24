import React from "react";
import { Col, Row } from "react-bootstrap";
import { services } from "../../utils/content";
import ServicesOfferCard from "./servicesOfferCard";

function ServicesHome(props) {
  return (
    <div className="services">
      <div className="container-fluid col-10 col-md-9 col-xl-8 p-0 align-items-center my-6 text-center">
        <h2 className="fw-bold">Services We Offer</h2>
        <p className="service-parah mt-3 mb-5">
          At OnSprint Global, we take pride in offering an array of IT services
          designed to help businesses thrive in the digital age. Our commitment
          to excellence and innovation is at the core of everything we do.
        </p>
        <Row
          xl={3}
          md={2}
          sm={1}
          xs={1}
          className="g-4 align-items-center justify-content-center"
        >
          {services.map((data, index) => (
            <Col key={index}>
              <ServicesOfferCard data={data} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default ServicesHome;
