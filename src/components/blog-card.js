import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import blogImg from "../assets/writing-bg.webp";

function BlogCard(props) {
    const {heading, para} = props.data;
    const [expand, setExpand] = useState(false);

    function expanding() {
        setExpand(!expand)
    }

    return (
        <Card className="border-0 cursor-pointer" onClick={expanding}>
            <Card.Img
                variant="top"
                className="rounded-4 img-fluid"
                src={blogImg}
            />
            <Card.Body className="p-0 mt-3">
                <Card.Title className="fs-5 fw-bold">
                    {heading}
                </Card.Title>
                <Card.Text>
                    <div className={"blog-card-para " + (expand ? "blog-card-para-visible" : "")}>
                        {para}
                    </div>

                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BlogCard;