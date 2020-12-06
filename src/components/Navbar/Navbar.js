import React from "react";

import "./Navbar.scss";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar">{props.children}</nav>
      <div className="navbar-padding"></div>
    </>
  );
};

export default Navbar;
