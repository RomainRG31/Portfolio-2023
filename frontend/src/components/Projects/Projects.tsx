import "./Projects.css";

interface IProjectsInfo {
  order: string;
  title: string;
  button: string;
}

const projects = (infos: IProjectsInfo) => {
  return (
    <div className="g-container-projects">
      <div>
        <span>{infos.order}</span>
        <p>{infos.title}</p>
        <button>{infos.button}</button>
      </div>
    </div>
  );
};

export default projects;
