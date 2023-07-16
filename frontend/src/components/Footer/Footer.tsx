import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialNetworkLinkedin = "{ LINKEDIN }";
  const socialNetworkGitHub = "{ GITHUB }";

  const urlLinkedin = "https://www.linkedin.com/in/romainrg31/";
  const urlGitHub = "https://github.com/RomainRG31";

  return (
    <div className="g-container-footer">
      <div className="boost-block">
        <div className="boost">
          <p>I Am - Boost</p>
        </div>
        <div className="g-container-pages-link">
          <Link className="about-link" to={"/#About"}>
            About
          </Link>
          <Link className="projects-link" to={"/#Projects"}>
            Projects
          </Link>
          <Link className="works-lik" to={"/#Works"}>
            Works
          </Link>
          <Link className="contact-link" to={"/#Contact"}>
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
