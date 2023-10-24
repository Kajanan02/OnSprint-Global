import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { Button, Col, Row } from "react-bootstrap";
import Banner from "../../components/banner";
import blogImg from "../../assets/writing-bg.webp";
import CtaBanner from "../../components/cta-banner";

function Blog() {
  return (
    <>
      <Banner
        className={"banner banner-blog"}
        title={"Blog Page"}
        txt={"Get to know more about technology"}
      />
      <div className="container-fluid col-10 col-md-9 col-xl-8 px-0 py-6 align-items-center">
        <Row xs={1} md={3} className="g-5">
          <Col>
            <Card className="border-0">
              <Card.Img
                variant="top"
                className="rounded-4 img-fluid"
                src={blogImg}
              />
              <Card.Body className="p-0 mt-3">
                <Card.Title className="fs-4 fw-bold">
                  Full Stack Development
                </Card.Title>
                <Card.Text>
                  One of the primary reasons developers opt for the MERN stack
                  is its ability to enable full stack development. The MERN
                  stack encompasses all aspects of web development, from the
                  client-side to the server-side and database management. This
                  means that a single team can work seamlessly on both the
                  front-end and back-end of the application, streamlining the
                  development process and reducing the need for separate teams.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Img
                variant="top"
                className="rounded-4 img-fluid"
                src={blogImg}
              />
              <Card.Body className="p-0 mt-3">
                <Card.Title className="fs-4 fw-bold">
                  {" "}
                  JavaScript Everywhere
                </Card.Title>
                <Card.Text>
                  MERN is characterized by the use of JavaScript throughout the
                  entire development stack. This consistency simplifies the
                  development process, as developers don't have to switch
                  between different languages for front-end and back-end
                  development. This cohesion not only improves efficiency but
                  also makes it easier to find developers proficient in
                  JavaScript.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Img
                variant="top"
                className="rounded-4 img-fluid"
                src={blogImg}
              />
              <Card.Body className="p-0 mt-3">
                <Card.Title className="fs-4 fw-bold">
                  React for Dynamic Front-End
                </Card.Title>
                <Card.Text>
                  React, a JavaScript library for building user interfaces, is a
                  core component of the MERN stack. It provides an efficient way
                  to create interactive, dynamic, and responsive front-end
                  applications. React's component-based architecture and virtual
                  DOM make it an excellent choice for developing complex user
                  interfaces, while its active community and vast ecosystem of
                  libraries and tools ensure developers have access to a wealth
                  of resources.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <CtaBanner />
    </>
  );
}

export default Blog;
