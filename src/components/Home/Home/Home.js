import React from "react";

import "./Home.css";

import SocialBrand from "../SocialBrand/SocialBrand";
import Header from "../Header/Header";
import OurServices from "../OurServices/OurServices";
import ProjectShowCase from "../ProjectShowCase/ProjectShowCase";
import ClientFeedbacks from "../ClientFeedbacks/ClientFeedbacks";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <SocialBrand />
      <OurServices />
      <ProjectShowCase />
      <ClientFeedbacks />
    </div>
  );
};

export default Home;
