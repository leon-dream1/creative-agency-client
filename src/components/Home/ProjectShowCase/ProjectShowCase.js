import React from "react";
import Slider from "react-slick";

import "./ProjectShowCase.css";
import SliderShow from "../SliderShow/SliderShow";

const ProjectShowCase = () => {
  return (
    <div className="slider_show">
      <h2 className="text-center text-white">
        Her are Some of <span style={{ color: "#7ab259" }}>Our Works</span>
      </h2>

      <div className="container mt-5">
        <SliderShow />
      </div>
    </div>
  );
};

export default ProjectShowCase;
