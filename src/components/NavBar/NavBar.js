import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <>
        <AppBar>
          <Toolbar>
            <Typography component="h1" id="appTitle">
              Amélégumes
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </>
    );
  }
}

export default NavBar;
