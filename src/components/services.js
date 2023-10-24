import React from "react";
import Banner from "./banner";
import CtaBanner from "./cta-banner";
import Services from "../pages/Home/services-home";

function services() {
  return (
    <>
      <Banner
        className={"banner banner-career"}
        title={"Service Page"}
        txt={"Explore our services"}
      />
      <Services />
      <CtaBanner />
    </>
  );
}

export default services;
