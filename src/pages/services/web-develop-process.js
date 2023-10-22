import React from "react";
import { webDevelopProcess } from "../../utils/content";
import { Col, Row } from "react-bootstrap";

function WebDevelopProcess(props) {
  return (
    <div className={"container-fluid col-md-9 col-xl-9 p-0"}>
      <div className={"pb-5 my-5"}>
        <h1 className={"develop-process-heading"}>
          Trace along the development process
          <br />
          of your Minimum Viable Product.
        </h1>
      </div>

      <Row
        xl={3}
        md={2}
        sm={1}
        xs={1}
        className={"g-5 justify-content-between align-items-center"}
      >
        {webDevelopProcess.map((data, index) => (
          <Col className={""} key={index + "web-develop"}>
            <div className={""}>
              <h5 className={"develop-process-step"}>Step {index + 1}.</h5>
              <h2 className={"develop-process-step-heading"}>{data.heading}</h2>
              <p className={"develop-process-step-para"}>{data.para}</p>
            </div>
          </Col>
        ))}
      </Row>

      <div className={"my-5 py-5"}>
        <div className={"text-center"}>TECHNOLOGIES</div>
        <h1 className={"develop-process-heading"}>
          Our expert team has mastered
          <br />
          the following stacks.
        </h1>

        <div>
          <Row
            xl={4}
            md={4}
            sm={2}
            xs={2}
            className={
              "g-md-4 g-4 justify-content-between align-items-center mt-3"
            }
          >
            {Array(12)
              .fill(0)
              .map((data, index) => (
                <Col className="justify-content-between align-items-center">
                  <div
                    className={"technology-card"}
                    key={index + "techno"}
                  ></div>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default WebDevelopProcess;
