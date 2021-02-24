import { Link } from "react-router-dom";

import Brand from "../Brand/Brand";

import "./NavigationBar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navigation-bar">
        <div className="container">
          <h1>
            <Link to="/">
              <Brand />
            </Link>
          </h1>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/produits">Nos semis</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="navigation-bar-padding"></div>
    </>
  );
};

export default Navbar;
