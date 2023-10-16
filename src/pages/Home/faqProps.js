import React from "react";
import { Accordion } from "react-bootstrap";

export function faqProps(props) {
  const { question, answer } = props.data;
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{question}</Accordion.Header>
          <Accordion.Body>{answer}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default faqProps;
