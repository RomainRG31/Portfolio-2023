import "./Projects.css";

interface IProjectsInfo {
  order: string;
  title: string;
  button: string;
}

const projects = (infos: IProjectsInfo) => {
  return (
    <div className="g-container-projects">
      <hr></hr>
      <div className="order-title">
        <span className="order">{infos.order}</span>
        <p className="title">{infos.title}</p>
      </div>
      <div className="btn-p">
        <button>{infos.button}</button>
      </div>
    </div>
  );
};

export default projects;
