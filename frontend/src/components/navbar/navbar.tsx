import React, { useContext, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };

  return (
    <motion.nav
      className={`navbar ${menuOpen ? "menu-open" : ""}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="menu-icon" onClick={toggleMenu}>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
          alt="menu--v1"
        />
      </div>
      <Link to="/#Home">
        <img src={logo} alt="Logo of Romain ROGER" />
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
