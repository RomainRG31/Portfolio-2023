import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialNetworkLinkedin = "{ Linkedin }";
  const socialNetworkGitHub = "{ GitHub }";

  const urlLinkedin = "https://www.linkedin.com/in/romainrg31/";
  const urlGitHub = "https://github.com/RomainRG31";

  return (
    <div className="g-container-footer">
      <div className="boost-block">
        <div className="boost">
          <p>I Am - Boost</p>
        </div>
        <div className="g-container-pages-link">
          <Link to={"/#About"}>About</Link>
          <Link to={"/#Projects"}>Projects</Link>
          <Link to={"/#Works"}>Works</Link>
          <Link to={"/#Contact"} className="footer-contact-link">
            Contact
          </Link>
        </div>
      </div>
      <div className="social">
        <a href={urlLinkedin}>{socialNetworkLinkedin}</a>
        <a href={urlGitHub}>{socialNetworkGitHub}</a>
      </div>
      <div className="copyright">
        <p>©All Rights Reserved.</p>
        <p>Copyright © 2023 </p>
      </div>
    </div>
  );
};

export default Footer;
