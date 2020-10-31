import React, { Component } from "react";
import { Container } from "@material-ui/core";
//import "./Hero.css";

class Hero extends Component {
  render() {
    return (
      <Container disableGutters>
        <img
          alt="Amélégumes"
          srcset=""
          sizes=""
          src={process.env.PUBLIC_URL + "/images/background-desktop.jpg"}
        />
      </Container>
    );
  }
}

export default Hero;
