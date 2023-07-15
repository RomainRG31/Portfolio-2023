// import { Link } from "react-router-dom";
import logo from "../../assets/img/RR-logo-portfolio.png";
import "./navbar.css";

const navbar = () => {
  return (
    <nav>
      <span>
        <img src={logo} alt="Logo de Romain ROGER" />
      </span>
      <ul>
        <li className="btn-about">ABOUT</li>
        <li className="btn-projects">PROJECTS</li>
        <li className="btn-works">WORKS</li>
        <li className="btn-contact">CONTACT</li>
      </ul>
      <span>
        <p className="btn-languages">FRENCH</p>
      </span>
    </nav>
  );
};

export default navbar;
