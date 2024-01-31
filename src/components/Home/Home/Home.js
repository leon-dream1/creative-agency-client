import React from "react";

import "./Home.css";

import SocialBrand from "../SocialBrand/SocialBrand";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <SocialBrand />
    </div>
  );
};

export default Home;
