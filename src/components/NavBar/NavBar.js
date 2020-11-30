import React from "react";

import "./NavBar.css";

const NavBar = (props) => {
  return (
    <>
      <nav className="NavBar">{props.children}</nav>
      <div className="NavBarPadding"></div>
    </>
  );
};

export default NavBar;
