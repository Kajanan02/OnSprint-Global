import React, { useState } from "react";

function ServiceCard(props) {
  const { heading, para } = props.data;
  const [expand, setExpand] = useState(false);

  function expanding() {
    setExpand(!expand);
  }

  return (
    <div className={"services-card"}>
      <h3 className={"service-card-heading"}>{heading}</h3>
      <p
        className={
          "service-card-para " + (expand ? "service-card-para-visible" : " ")
        }
      >
        {para}
      </p>
      <div className={"service-card-more-details"} onClick={expanding}>
        {expand ? "Less Details >" : "More Details >"}
      </div>
    </div>
  );
}

export default ServiceCard;
