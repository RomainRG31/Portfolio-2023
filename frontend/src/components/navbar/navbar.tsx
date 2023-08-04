import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import logo from "../../assets/img/RR-logo-portfolio.png";
import { motion } from "framer-motion";
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

  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  const ulVariants = {
    open: {
      display: "flex",
      transition: { staggerChildren: 0.1 },
    },
  };

  const liVariantsDesktop = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 1, y: 0 },
  };

  const liVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    closed: { opacity: 0, y: 50 },
  };

  return (
    <motion.nav
      className={`navbar ${menuOpen ? "menu-open" : ""}`}
      initial="hidden"
      animate={menuOpen ? "visible" : "closed"}
      exit="closed"
    >
      <motion.div
        className="menu-icon"
        onClick={toggleMenu}
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        exit="closed"
        whileTap="open"
      >
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
          alt="menu--v1"
        />
      </motion.div>
      <Link to="/#Home">
        <img src={logo} alt="Logo of Romain ROGER" />
      </Link>
      <motion.ul variants={ulVariants} animate={menuOpen ? "open" : "closed"}>
        <Link className="btn-projects" to="/#Projects">
          <motion.li variants={isDesktop ? liVariantsDesktop : liVariants}>
            {language === "en" ? "PROJECTS" : "PROJETS"}
          </motion.li>
        </Link>
        <Link className="btn-works" to="/#Works">
          <motion.li variants={isDesktop ? liVariantsDesktop : liVariants}>
            {language === "en" ? "WORKS" : "TRAVAIL"}
          </motion.li>
        </Link>
        <Link className="btn-contact" to="/#Contact">
          <motion.li variants={isDesktop ? liVariantsDesktop : liVariants}>
            CONTACT
          </motion.li>
        </Link>
        <button onClick={handleLanguageToggle}>
          {language === "en" ? "FRENCH" : "ANGLAIS"}
        </button>
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
