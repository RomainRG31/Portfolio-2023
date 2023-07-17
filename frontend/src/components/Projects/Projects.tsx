import "./Projects.css";
import { Link } from "react-router-dom";

interface IProjectsInfo {
  order: string;
  title: string;
  link: string;
}

const projects = (infos: IProjectsInfo) => {
  return (
    <div id="Projects" className="g-container-projects">
      <hr></hr>
      <div className="order-title">
        <span className="order">{infos.order}</span>
        <p className="title">{infos.title}</p>
      </div>
      <div className="btn-p">
        <Link to={infos.link} className="view-projects">
          [ VIEW PROJECTS ]
        </Link>
      </div>
    </div>
  );
};

export default projects;
