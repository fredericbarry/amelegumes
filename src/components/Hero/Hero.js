import React from "react";

import "./Hero.css";

import Logo from "../Logo/Logo";

const Hero = () => {
  return (
    <section className="HeroSection">
      <div className="HeroContent">
        <Logo className="HeroLogo" />
        <div className="HeroDescription">
          Les légumes les plus Amélicieux qui soient
        </div>
      </div>
    </section>
  );
};

export default Hero;
