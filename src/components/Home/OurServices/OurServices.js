import React from "react";

import { services } from "./fakeServices";

import "./OurServices.css";
import Service from "../Service/Service";

const OurServices = () => {
  return (
    <div className="our-services text-center">
      <h2 style={{ marginBottom: "30px" }}>
        Provide awesome <span style={{ color: "#7ab259" }}>services</span>
      </h2>

      <div className="container">
        <div className="row">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
