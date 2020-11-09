import React from "react";

import "./Navbar.css";

import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <header>
      <Logo className="navbarTitle" />
      {/* <nav>
        <ul>
          <li>
            <a href="#">Produits</a>
          </li>
          <li>
            <a href="#">A Propos</a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Navbar;
