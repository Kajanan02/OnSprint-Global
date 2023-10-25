import React from "react";
// import Button from 'react-bootstrap/Button';
import {Col, Row} from "react-bootstrap";
import Banner from "../../components/banner";
import CtaBanner from "../../components/cta-banner";
import BlogCard from "../../components/blog-card";
import {blogsCards} from "../../utils/content";
import Reveal from "react-reveal/Reveal";

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
                    <Reveal effect="fadeInUp">
                        {blogsCards.map((data, index) => (
                            <Col key={index + "blog"}>
                                <BlogCard data={data}/>
                            </Col>
                        ))}
                    </Reveal>
                </Row>
            </div>
            <CtaBanner/>
        </>
    );
}

export default Blog;
