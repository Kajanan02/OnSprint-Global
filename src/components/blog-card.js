import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import blogImg from "../assets/writing-bg.webp";

function BlogCard(props) {
  const { heading, para, blogImg } = props.data;
  const [expand, setExpand] = useState(false);

  function expanding() {
    setExpand(!expand);
  }

  return (
    <Card className="border-0" >
      <Card.Img variant="top" className="rounded-4 img-fluid" src={require(`../assets/${blogImg}.png`)} />

      <Card.Body className="p-0 mt-3">
        <Card.Title className="fs-5 fw-bold">{heading}</Card.Title>
        <Card.Text>
          <p
            className={
              "blog-card-para " + (expand ? "blog-card-para-visible" : "")
            }
          >
            {para}
          </p>
          <div className={"text-black fw-semibold cursor-pointer"} onClick={expanding}>{expand ? "Less":"More"} ></div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
