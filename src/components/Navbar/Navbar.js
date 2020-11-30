import React from "react";

import "./NavBar.css";

import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <header className="NavbarSection">
      <Logo className="NavbarLogo" />
    </header>
  );
};

export default Navbar;
