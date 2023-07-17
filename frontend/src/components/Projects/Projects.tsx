import "./Projects.css";

import { Link } from "react-router-dom";

interface IProjectsInfo {
  order: string;
  title: string;
  link: string;
}

const Projects = ({ order, title, link }: IProjectsInfo) => {
  return (
    <div id="Projects" className="g-container-projects">
      <hr />
      <div className="order-title">
        <span className="order">{order}</span>
        <p className="title">{title}</p>
      </div>
      <div className="btn-p">
        <Link to={link} className="view-projects">
          [ VIEW PROJECTS ]
        </Link>
      </div>
    </div>
  );
};

export default Projects;
