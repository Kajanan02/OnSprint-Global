import React from "react";
import { qns } from "../../utils/content";
import { faqprops } from "./faqProps";
import { Col } from "react-bootstrap";

function faq(props) {
  return (
    <>
      <div className="faq">
        <div className="container-fluid col-10 col-md-9 col-xl-8 px-0 py-6 align-items-center">
          <h2>Frequenly Asked Questions</h2>
          {qns.map((data, index) => (
            <Col key={index}>
              <faqprops data={data} />
            </Col>
          ))}
        </div>
      </div>
    </>
  );
}

export default faq;
