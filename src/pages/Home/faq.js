import React from "react";
import {faq} from "../../utils/content";
import Faqprops from "./faqProps";
import {Col} from "react-bootstrap";

function Faq(props) {
    return (
        <>
            <div className="faq">
                <div className="container-fluid col-10 col-md-9 col-xl-8 px-0 py-5 align-items-center">
                    <h2 className="text-center mb-md-5 mb-3">Frequenly Asked Questions</h2>
                    {faq.map((data, index) => (
                        <Col key={index} className="faq-bar">
                            <Faqprops data={data}/>
                        </Col>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Faq;
