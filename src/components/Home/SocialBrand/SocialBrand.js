import React from "react";

import slack from "../../../images/logos/slack.png";
import uber from "../../../images/logos/uber.png";
import google from "../../../images/logos/google.png";
import airbnb from "../../../images/logos/airbnb.png";
import netflix from "../../../images/logos/netflix.png";

import './SocialBrand.css';

const SocialBrand = () => {
  return (
    <div className="container social_brand mt-5 mb-5">
      <div className="row align-items-center text-center gy-5 gap-lg-3">
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <img src={slack} alt="" className="img-fluid"/>
        </div>
        <div className="col-md-2">
          <img src={google} alt="" className="img-fluid"/>
        </div>
        <div className="col-md-2">
          <img src={uber} alt="" className="img-fluid"/>
        </div>
        <div className="col-md-2">
          <img src={netflix} alt="" className="img-fluid"/>
        </div>
        <div className="col-md-2">
          <img src={airbnb} alt="" className="img-fluid"/>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default SocialBrand;
