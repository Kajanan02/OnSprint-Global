import React from "react";
import { webDevelopProcess } from "../../utils/content";

function WebDevelopProcess(props) {
  return (
    <div className={"py-5"}>
      <div className={"pb-5 my-5"}>
        <h1 className={"develop-process-heading"}>
          Trace along the development process
          <br />
          of your Minimum Viable Product.
        </h1>
      </div>

      <div className={"px-xl-5"}>
        <div className={"row"}>
          {webDevelopProcess.map((data, index) => (
            <div className={"col-md-4"} key={index + "web-develop"}>
              <div className={"px-3 pb-5"}>
                <h5 className={"develop-process-step"}>Step {index + 1}.</h5>
                <h2 className={"develop-process-step-heading"}>
                  {data.heading}
                </h2>
                <p className={"develop-process-step-para"}>{data.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={"my-5 py-5"}>
        <div className={"text-center"}>TECHNOLOGIES</div>
        <h1 className={"develop-process-heading"}>
          Our expert team has mastered
          <br />
          the following stacks.
        </h1>

        <div className={"px-xl-5 mx-xl-5"}>
          <div
            className={
              "px-xl-5 mx-xl-5 mt-5 d-flex flex-wrap justify-content-center p-md-2 p-sm-2 p-xs-2 m-md-2 tech"
            }
          >
            {Array(12)
              .fill(0)
              .map((data, index) => (
                <div className={"technology-card"} key={index + "techno"} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDevelopProcess;
