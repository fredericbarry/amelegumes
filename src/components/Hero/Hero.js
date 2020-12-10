import React from "react";

import "./Hero.scss";

import Brand from "../Brand/Brand";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <div className="brand">
          <Brand />
        </div>
        <div className="description">
          Les légumes les plus Amélicieux qui soient
        </div>
      </div>
    </div>
  );
};

export default Hero;
