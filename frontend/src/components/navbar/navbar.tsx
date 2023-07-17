import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/RR-logo-portfolio.png";
import "./navbar.css";
import { LanguageContext } from "../../LanguageContext";

const Navbar: React.FC = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  const { language } = useContext(LanguageContext);
  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  return (
    <nav id="About">
      <span>
        <img src={logo} alt="Logo de Romain ROGER" />
      </span>
      <ul>
        <li className="btn-projects">
          <Link to="/#Projects">
            {language === "en" ? "PROJECTS" : "PROJETS"}
          </Link>
        </li>
        <li className="btn-works">
          <Link to="/#Works">{language === "en" ? "WORKS" : "TRAVAIL"}</Link>
        </li>
        <li className="btn-contact">
          <Link to="/#Contact">CONTACT</Link>
        </li>
        <button onClick={handleLanguageToggle}>
          {language === "en" ? "FRENCH" : "ANGLAIS"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
