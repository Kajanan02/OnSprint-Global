import React from "react";

function Banner({ title, txt }) {
  return (
    <div className="banner-head gap-2">
      <div className="banner-text container-fluid col-10 col-md-9 col-xl-8 p-0 ">
        <h1 className="fw-bold text-white">{title}</h1>
        <p className="text-white-50">{txt}</p>
      </div>
    </div>
  );
}

export default Banner;
