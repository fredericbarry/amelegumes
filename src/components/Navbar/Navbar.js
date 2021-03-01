import { Link } from "react-router-dom";

import Brand from "../Brand/Brand";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__nav">
        <Link to="/" className="navbar__brand">
          <Brand />
        </Link>
        <ul className="navbar__links">
          <li>
            <Link to="/" className="navbar__link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/boutique" className="navbar__link">
              Boutique
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
