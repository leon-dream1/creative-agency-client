import React from "react";

import banner from '../../../images/logos/Frame.png'

import './Banner.css';

const Banner = () => {
  return (
    <div className="container">
      <div className="row align-items-center mt-5 text-center text-lg-start gap-4 gap-lg-0">
        <div className="col-lg-5">
          <h1 className="banner_title">Let’s Grow Your <br />
              Brand To The <br />
              Next Level
          </h1>
          <p className="banner_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
          <button className="login_btn_style">Hire Us</button>
        </div>
        <div className="col-lg-7">
            <img src={banner} alt="" className="img-fluid"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
