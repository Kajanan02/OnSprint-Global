import React from "react";

function ServiceCard(props) {
  const { heading, para } = props.data;
  return (
    <div className={"services-card"}>
      <div className={"service-card-heading"}>{heading}</div>
      <div className={"service-card-para"}>{para}</div>
      <div className={"service-card-more-details"}></div>
    </div>
  );
}

export default ServiceCard;
