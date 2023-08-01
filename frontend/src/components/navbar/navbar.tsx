import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/RR-logo-portfolio.png";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "./navbar.css";
import { LanguageContext } from "../../LanguageContext";

const Navbar: React.FC = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  const { language } = useContext(LanguageContext);
  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };

  return (
    <motion.nav
      className="navbar"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <Link to="/#Home">
        <img src={logo} alt="Logo de Romain ROGER" />
      </Link>
      <ul>
        <Link className="btn-projects" to="/#Projects">
          <li>{language === "en" ? "PROJECTS" : "PROJETS"}</li>
        </Link>
        <Link className="btn-works" to="/#Works">
          <li>{language === "en" ? "WORKS" : "TRAVAIL"}</li>
        </Link>
        <Link className="btn-contact" to="/#Contact">
          <li>CONTACT</li>
        </Link>
        <button onClick={handleLanguageToggle}>
          {language === "en" ? "FRENCH" : "ANGLAIS"}
        </button>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
