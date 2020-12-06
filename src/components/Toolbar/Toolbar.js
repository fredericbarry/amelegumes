import React from "react";

import "./Toolbar.scss";

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar">{props.children}</nav>
      <div className="navbar-padding"></div>
    </>
  );
};

export default NavBar;
