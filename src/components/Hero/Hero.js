import React from "react";
import { Container, Typography } from "@material-ui/core";
import "./Hero.css";

const Hero = () => {
  return (
    <Container id="heroContainer">
      <div id="heroBox">
        <Typography variant="h1" id="heroTitle">
          Amélégumes
        </Typography>
        <Typography id="heroDescription">
          Les légumes les plus Amélicieux qui soient
        </Typography>
      </div>
    </Container>
  );
};

export default Hero;
