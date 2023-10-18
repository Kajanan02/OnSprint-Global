import React from "react";
import {Accordion} from "react-bootstrap";

function FaqProps(props) {
    const {question, answer} = props.data;
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

export default FaqProps;
