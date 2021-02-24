import React from "react";

import Brand from "../Brand/Brand";

import "./NavigationBar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navigation-bar">
        <div className="container">
          <h1>
            <a href="/">
              <Brand />
            </a>
          </h1>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/produits">Produits</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="navigation-bar-padding"></div>
    </>
  );
};

export default Navbar;
