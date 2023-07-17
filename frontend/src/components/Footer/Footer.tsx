import "./Footer.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

const Footer = () => {
  const socialNetworkLinkedin = "{ LINKEDIN }";
  const socialNetworkGitHub = "{ GITHUB }";

  const urlLinkedin = "https://www.linkedin.com/in/romainrg31/";
  const urlGitHub = "https://github.com/RomainRG31";

  const { language } = useContext(LanguageContext);

  return (
    <div className="g-container-footer">
      <div className="boost-block">
        <div className="boost">
          <p> {language === "en" ? "I Am - Boost" : "Je Suis - Boosté"} </p>
        </div>
        <div className="g-container-pages-link">
          <Link className="about-link" to={"/#About"}>
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
            ? "Copyright © 2023"
            : "Droits d'auteur © 2023 "}{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
