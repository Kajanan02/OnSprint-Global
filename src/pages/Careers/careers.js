import React from "react";
import Banner from "../../components/banner";
import { Alert } from "react-bootstrap";
import CtaBanner from "../../components/cta-banner";

function careers() {
  return (
    <>
      <Banner
        className={"banner banner-career"}
        title={"Careers Page"}
        txt={"Start your career at OnSprint Global"}
      />
      <div className="container-fluid col-10 col-md-9 col-xl-8 p-0">
        <Alert variant="danger" className="my-5 border-0">
          <Alert.Heading className=" py-4 px-3">
            We don't have any Interns or Jobs now
          </Alert.Heading>
        </Alert>
      </div>
      <CtaBanner />
    </>
  );
}

export default careers;
