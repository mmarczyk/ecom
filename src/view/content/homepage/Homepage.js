import React from "react";
import TopBanner from "./TopBanner.js";
import Popular from "./Popular.js";
import About from "./About.js";

const Homepage = () => {
  return (
    <div className="Homepage">
      <TopBanner />
      <Popular />
      <About />
    </div>
  );
};

export default Homepage;
