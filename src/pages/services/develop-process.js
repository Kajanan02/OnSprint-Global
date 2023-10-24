import React from "react";
import { developProcess, technologies } from "../../utils/content";
import { Col, Row } from "react-bootstrap";
import Reveal from "react-reveal/Reveal";

function DevelopProcess(props) {
  return (
    <div className={"container-fluid col-10 col-md-9 col-xl-8 p-0"}>
      <div className={"pb-5 my-5"}>
        <Reveal effect="fadeInUp">
          <h1 className={"develop-process-heading"}>
            Bringing Your Digital Dreams to Life is <br /> Our usual Step
            Process
          </h1>
        </Reveal>
      </div>

      <Row
        xl={3}
        md={2}
        sm={1}
        xs={1}
        className={
          "g-5 justify-content-between align-items-center px-0 px-md-5"
        }
      >
        <Reveal effect="fadeInUp">
          {developProcess.map((data, index) => (
            <Col className={""} key={index + "web-develop"}>
              <div className={""}>
                <p className={"develop-process-step"}>Step {index + 1}.</p>
                <h2 className={"develop-process-step-heading"}>
                  {data.heading}
                </h2>
                <p className={"develop-process-step-para"}>{data.para}</p>
              </div>
            </Col>
          ))}
        </Reveal>
      </Row>

      <div className={"my-5 py-5"}>
        <Reveal effect="fadeInUp">
          <p className={"text-center"}>TECHNOLOGIES</p>
          <h1 className={"develop-process-heading"}>
            Our expert team has mastered
            <br />
            the following stacks.
          </h1>
        </Reveal>
        <Row
          xl={4}
          md={4}
          sm={2}
          xs={2}
          className={
            "g-4 justify-content-between justify-content-md-center align-items-center mt-3 tech-icon"
          }
        >
          <Reveal effect="fadeInUp">
            {technologies.map((data, index) => (
              <Col className="d-flex justify-content-center align-items-center p-0">
                <div className={"technology-card"} key={index + "techno"}>
                  <img
                    src={require(`../../assets/${data}.png`)}
                    alt={data}
                    width={75}
                  />
                </div>
              </Col>
            ))}
          </Reveal>
        </Row>
      </div>
    </div>
  );
}

export default DevelopProcess;
