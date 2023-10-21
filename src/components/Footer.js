import React from "react";
import logo from "../assets/OnSprint-global.svg";
import {Col, Image, Row} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer bg-light align-items-center py-2">
        <div className="container-fluid col-10 col-md-9 col-xl-8 p-0 align-items-center my-5 text-center">
          <Row
            md={4}
            sm={1}
            xs={1}
            className="g-4 align-items-start justify-content-center "
          >
            <Col md={4}>
              <div className="text-start">
                <Image
                  src={logo}
                  width="140"
                  className="d-inline-block align-top"
                  alt="logo"
                  as={Link}
                  to={"/"}
                />
                <p className="mt-3 footer-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <div className="d-flex gap-2 mt-2">
                  <i className="fab fa-instagram fa-fw fa-1x text-dark me-1"></i>
                  <i className="fab fa-whatsapp fa-fw fa-1x text-dark me-1"></i>
                  <i className="fab fa-youtube fa-fw fa-1x text-dark me-1"></i>
                  <i className="fab fa-linkedin fa-fw fa-1x text-dark me-1"></i>
                  <i className="fab fa-twitter fa-fw fa-1x text-dark me-1"></i>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="text-start px-2 py-3">
                <div className="contact">
                  <h5 className=" mb-3 fw-bold">Services</h5>
                  <div className="d-flex flex-column gap-2 mt-2">
                    <NavLink as={Link} to={"/web-development"}>
                      Web Development
                    </NavLink>
                    <NavLink as={Link} to={"/digital-marketing"}>
                      Digital Marketing
                    </NavLink>
                    <NavLink as={Link} to={"/ui-ux-design"}>
                      UI/UX Designing
                    </NavLink>
                    <NavLink as={Link} to={"/seo-optimization"}>
                      SEO Services
                    </NavLink>
                    <NavLink as={Link} to={"/app-development"}>
                      App Development
                    </NavLink>
                    <NavLink as={Link} to={"/content-writing"}>
                      Content Writing
                    </NavLink>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={2}>
              <div className="text-start px-2 py-3">
                <div className="contact">
                  <h5 className="mb-3 fw-bold">Others</h5>
                  <div className="d-flex flex-column gap-2 mt-2">
                    <NavLink as={Link} to={"/about"}>
                      About
                    </NavLink>
                    <NavLink as={Link} to={"/career"}>
                      Careers
                    </NavLink>
                    <NavLink as={Link} to={"/blog"}>
                      Blog
                    </NavLink>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="text-start px-2 py-3">
                <div className="description">
                  <h5 className="fw-bold mb-3">Contact</h5>
                  <div className="d-flex gap-2">
                    <span className="material-symbols-rounded text-primary">
                      call
                    </span>
                                        <p>(+94) 701453919</p>
                                    </div>

                  <div className="d-flex gap-2 mt-2">
                    <span className="material-symbols-rounded text-primary">
                      mail
                    </span>
                                        <p>onsprintglobal@gmail.com</p>
                                    </div>

                  <div className="d-flex gap-2 mt-2">
                    <span className="material-symbols-rounded text-primary">
                      location_on
                    </span>
                                        <p>SriLanka</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Footer;
