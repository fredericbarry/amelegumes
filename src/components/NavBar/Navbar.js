import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography id="navbarTitle">Amélégumes</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
