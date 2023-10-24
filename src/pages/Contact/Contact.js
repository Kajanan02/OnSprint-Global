import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Banner from "../../components/banner";

function Contact() {
  return (
    <>
      <Banner
        className={"banner banner-contact"}
        title={"Contact Page"}
        txt={"Any information feel free and call to OnSprint Global"}
      />
      <div className="container-fluid col-10 col-md-9 col-xl-8 p-0">
        <Row className="py-6 justify-content-between align-items-center">
          <Col xl={4} md={4} sm={12}>
            <h3 class="mb-4 mt-4">Contact US</h3>
            <p class="mb-2 ">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical
            </p>

            <div class="con-detail mt-4">
              <div class="d-flex gap-2">
                <span class="material-symbols-rounded text-primary">call</span>
                <p>(+94) 701453919</p>
              </div>

              <div class="d-flex gap-2 mt-2">
                <span class="material-symbols-rounded text-primary">mail</span>
                <p>onsprintglobal@gmail.com</p>
              </div>

              <div class="d-flex gap-2 mt-2">
                <span class="material-symbols-rounded text-primary">
                  location_on
                </span>
                <p>SriLanka</p>
              </div>
            </div>
          </Col>

          <Col xl={7} md={7} sm={12}>
            <Form>
              <Form.Group className="mb-4 mt-2">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group class="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter message"
                  rows={3}
                />
              </Form.Group>
              <button type="button" className="btn btn-primary ">
                Send Message
              </button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Contact;
