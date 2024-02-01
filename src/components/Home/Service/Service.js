import React from "react";

import "./Service.css";

const Service = ({ service }) => {
  const { id, image, title, desc } = service;
  return (
    <div className="col-md-6 col-lg-4 mt-5">
      <div className="main-content">
        <img src={image} alt="" className="img-fluid" />
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Service;
