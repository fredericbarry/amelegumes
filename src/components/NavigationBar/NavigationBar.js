import { Link } from "react-router-dom";

import Brand from "../Brand/Brand";

import "./NavigationBar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navigation-bar">
        <div className="container">
          <Link to="/">
            <h1>
              <Brand />
            </h1>
          </Link>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/boutique">Boutique</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="navigation-bar-padding"></div>
    </>
  );
};

export default Navbar;
