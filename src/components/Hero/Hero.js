import React from "react";

import "./Hero.scss";

import Logo from "../Logo/Logo";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <Logo className="logo" />
        <div className="description">
          Les légumes les plus Amélicieux qui soient
        </div>
      </div>
    </div>
  );
};

export default Hero;
