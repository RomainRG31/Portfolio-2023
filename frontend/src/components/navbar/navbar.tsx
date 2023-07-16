import { Link } from "react-router-dom";
import logo from "../../assets/img/RR-logo-portfolio.png";
import "./navbar.css";

const navbar = () => {
  return (
    <nav id="About">
      <span>
        <img src={logo} alt="Logo de Romain ROGER" />
      </span>
      <ul>
        <li className="btn-about">ABOUT</li>
        <li className="btn-projects">
          <Link to="/#Projects">PROJECTS</Link>
        </li>
        <li className="btn-works">
          <Link to="/#Works">WORKS</Link>
        </li>
        <li className="btn-contact">
          <Link to="/#Contact">CONTACT</Link>
        </li>
      </ul>
      <span>
        <p className="btn-languages">FRENCH</p>
      </span>
    </nav>
  );
};

export default navbar;
