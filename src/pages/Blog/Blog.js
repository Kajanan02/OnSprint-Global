import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { Button, Col, Row } from "react-bootstrap";
import Banner from "../../components/banner";
import blogImg from "../../assets/writing-bg.webp";

function Blog() {
  return (
    <>
      <Banner
        className={"banner banner-blog"}
        title={"Blog Page"}
        txt={"Get to know about OnSprint Global"}
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
                <Card.Title className="fs-4 fw-bold">Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
                <Card.Title className="fs-4 fw-bold">Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
                <Card.Title className="fs-4 fw-bold">Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Blog;
