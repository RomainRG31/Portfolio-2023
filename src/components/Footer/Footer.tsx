import "./Footer.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Footer = () => {
  const socialNetworkLinkedin = "{ LINKEDIN }";
  const socialNetworkGitHub = "{ GITHUB }";

  const urlLinkedin = "https://www.linkedin.com/in/romainrg31/";
  const urlGitHub = "https://github.com/RomainRG31";

  const { language } = useContext(LanguageContext);

  const worksRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        void controls.start("visible");
      } else {
        void controls.start("hidden");
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (worksRef.current) {
      observer.observe(worksRef.current);
    }

    return () => {
      if (worksRef.current) {
        observer.unobserve(worksRef.current);
      }
    };
  }, [controls]);

  const containerWorksVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.5 };

  return (
    <motion.div
      ref={worksRef}
      animate={controls}
      variants={containerWorksVariants}
      transition={transition}
      initial="hidden"
      className="g-container-footer"
    >
      <div className="boost-block">
        <div className="boost">
          <p> {language === "en" ? "I Am - Boost" : "Je Suis - Boosté"} </p>
        </div>
        <div className="g-container-pages-link">
          <Link className="about-link" to={"/#Home"}>
            {language === "en" ? "About" : "À Propos"}
          </Link>
          <Link className="projects-link" to={"/#Projects"}>
            {language === "en" ? "Projects" : "Projets"}
          </Link>
          <Link className="works-lik" to={"/#Works"}>
            {language === "en" ? "Works" : "Travail"}
          </Link>
          <Link className="contact-link" to="mailto:romain32.roger@gmail.com">
            Contact
          </Link>
        </div>
      </div>
      <div className="social">
        <a href={urlLinkedin}>{socialNetworkLinkedin}</a>
        <a href={urlGitHub}>{socialNetworkGitHub}</a>
      </div>
      <div className="copyright">
        <p>
          {" "}
          {language === "en"
            ? "©All Rights Reserved."
            : "©Tous droits réservés."}{" "}
        </p>
        <p>
          {" "}
          {language === "en"
            ? "Copyright © 2025"
            : "Droits d'auteur © 2025 "}{" "}
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
