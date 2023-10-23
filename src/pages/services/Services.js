import React from "react";
import ServiceCard from "./service-card";
import { servicesWeb } from "../../utils/content";
import serviceBanner from "../../assets/services-banner.svg";
import DevelopProcess from "./develop-process";
import CtaBanner from "../Home/cta-banner";
import Banner from "../../components/banner";

function Services() {
  return (
    <>
      <Banner
        title={"Web Development"}
        txt={"Get to know about OnSprint Global"}
      />

      <div className={"container"}>
        <div className={"py-xl-5 my-5"}>
          <div className={"row"}>
            {servicesWeb.map((data, index) => (
              <div key={index + "Services"} className={"col-md-4"}>
                <ServiceCard data={data} />
              </div>
            ))}
          </div>
        </div>

        <div className={"py-xl-5 my-xl-5 pb-5"}>
          <div className={"row px-5"}>
            <div className={"col-md-6 pb-5"}>
              <img
                src={serviceBanner}
                alt={"serviceBanner"}
                className={"w-100"}
              />
            </div>
            <div className={"col-md-6"}>
              <div className={"service-content-text"}>What we do</div>
              <div className={"service-content-heading"}>
                Empowering Innovation and Transformation
              </div>
              <div>
                <p className={"service-content-text"}>
                  Welcome to OnSprint Global! We are on a mission to shape the
                  future through inventive solutions and transformative
                  technologies that push the boundaries of what's possible.
                </p>
                <ul>
                  <li className={"service-content-text"}>
                    We collaborate to harness the potential of your ideas,
                    turning them into reality.
                  </li>
                  <li className={"service-content-text"}>
                    We lead change through user-centric designs and strategies
                    that create meaningful impact.
                  </li>
                  <li className={"service-content-text"}>
                    We empower businesses with cutting-edge solutions that drive
                    growth and pave the path to success.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <DevelopProcess />
      </div>

      <CtaBanner />
    </>
  );
}

export default Services;
