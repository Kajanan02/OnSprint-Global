import React from "react";

function Banner({ title, txt,className="banner" }) {
  return (
    <div className={"gap-2 " + className}>
      <div className="banner-text container-fluid col-10 col-md-9 col-xl-8 p-0 ">
        <h1 className="fw-bold text-white">{title}</h1>
        <p className="text-white-50">{txt}</p>
      </div>
    </div>
  );
}

export default Banner;
