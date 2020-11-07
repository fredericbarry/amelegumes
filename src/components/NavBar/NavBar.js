import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <>
        <AppBar>
          <Toolbar>
            <Typography id="navBarTitle">Amélégumes</Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </>
    );
  }
}

export default NavBar;
