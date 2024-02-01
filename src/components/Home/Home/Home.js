import React from "react";

import "./Home.css";

import SocialBrand from "../SocialBrand/SocialBrand";
import Header from "../Header/Header";
import OurServices from "../OurServices/OurServices";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <SocialBrand />
      <OurServices />
    </div>
  );
};

export default Home;
