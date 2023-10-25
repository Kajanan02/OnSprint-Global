import React, {useState} from "react";
import {Col, Form, Row} from "react-bootstrap";
import Banner from "../../components/banner";
import {toast} from "react-toastify";
import Loader from "../../assets/loader";
import Reveal from "react-reveal/Reveal";

function Contact() {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    function sendMsg(e) {
        setLoading(true);
        e.preventDefault();
        fetch("https://api.apispreadsheets.com/data/BSVJzORUniLXlR99/", {
            method: "POST",
            body: JSON.stringify({data: formData}),
        }).then((res) => {
            if (res.status === 201) {
                // SUCCESS
                toast.success("Successfully sent the message");
                setFormData({});
            } else {
                // ERROR
                toast.error("Something went wrong");
            }
            setLoading(false);
        });
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <>
            <Loader visible={loading}/>
            <Banner
                className={"banner banner-contact"}
                title={"Contact Page"}
                txt={"Any information feel free and call to OnSprint Global"}
            />
            <div className="container-fluid col-10 col-md-9 col-xl-8 p-0">
                <Row className="py-6 justify-content-between align-items-center">
                    <Col xl={4} md={4} sm={12}>
                        <Reveal effect="fadeInUp">
                            <h3 className="mb-4 mt-4">Contact US</h3>
                            <p className="mb-2 ">
                                Contrary to popular belief, Lorem Ipsum is not simply random
                                text. It has roots in a piece of classical
                            </p>

                            <div className="con-detail mt-4">
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
                        </Reveal>
                    </Col>

                    <Col xl={7} md={7} sm={12}>
                        <Reveal effect="fadeInUp">
                            <Form onSubmit={sendMsg}>
                                <Form.Group className="mb-4 mt-2">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Name"
                                        value={formData.fullName}
                                        required
                                        name={"fullName"}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={formData.email}
                                        required
                                        name={"email"}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Enter message"
                                        rows={3}
                                        name={"message"}
                                        value={formData.message}
                                        required
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <button type="submit" className="btn btn-primary ">
                                    Send Message
                                </button>
                            </Form>
                        </Reveal>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Contact;
