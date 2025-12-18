import React from "react";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import MidBanner from "../components/MidBanner";
import Feature from "../components/Feature";
function Home() {
  return (
    <div>
      {" "}
      <Carousel />
      <Category />
      <MidBanner />
      <Feature />
    </div>
  );
}

export default Home;
