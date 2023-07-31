import { useContext } from "react";
import "./Projects.css";

import { Link } from "react-router-dom";
import { LanguageContext } from "../../LanguageContext";

interface IProjectsInfo {
  order: string;
  title: string;
  link: string;
}

const Projects = ({ order, title, link }: IProjectsInfo) => {
  const { language } = useContext(LanguageContext);
  return (
    <div id="Projects" className="g-container-projects">
      <hr />
      <div className="order-title">
        <span className="order">{order}</span>
        <p className="title">{title}</p>
      </div>
      <div className="btn-p">
        <Link to={link} className="view-projects">
          {language === "en" ? "[ VIEW PROJECTS ]" : "[ VOIR PROJETS ]"}
        </Link>
      </div>
    </div>
  );
};

export default Projects;
