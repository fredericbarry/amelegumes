import React from "react";

import "./Hero.css";

import Logo from "../Logo/Logo";

const Hero = () => {
  return (
    <section className="HeroContainer">
      <div className="HeroContent">
        <Logo className="HeroTitle" />
        <div className="HeroDescription">
          Les légumes les plus Amélicieux qui soient
        </div>
      </div>
    </section>
  );
};

export default Hero;
