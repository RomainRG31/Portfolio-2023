import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/img/RR-logo-portfolio.png";
import "./navbar.css";

const navbar = () => {
  const [lang, setLang] = useState("en");

  const handleTranslateClick = () => {
    if (lang === "en") {
      setLang("fr");
    } else {
      setLang("en");
    }
  };
  return (
    <nav id="About">
      <span>
        <img src={logo} alt="Logo de Romain ROGER" />
      </span>
      <ul>
        <li className="btn-projects">
          <Link to="/#Projects">{lang === "en" ? "PROJECTS" : "PROJETS"}</Link>
        </li>
        <li className="btn-works">
          <Link to="/#Works">{lang === "en" ? "WORKS" : "TRAVAIL"}</Link>
        </li>
        <li className="btn-contact">
          <Link to="/#Contact">CONTACT</Link>
        </li>
        <button onClick={handleTranslateClick}>
          {lang === "en" ? "FRENCH" : "ANGLAIS"}
        </button>
      </ul>
    </nav>
  );
};

export default navbar;
