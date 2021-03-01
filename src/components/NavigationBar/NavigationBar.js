import { Link } from "react-router-dom";

import Brand from "../Brand/Brand";

import "./NavigationBar.scss";

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <div className="container">
        <Link to="/">
          <Brand />
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
  );
};

export default Navbar;
