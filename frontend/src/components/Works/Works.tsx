import "./Works.css";

interface IWorks {
  year: string;
  experiences: string;
}

const Works = (works: IWorks) => {
  return (
    <div className="works-block">
      <hr></hr>
      <p className="works-year">{works.year}</p>
      <p>{works.experiences}</p>
    </div>
  );
};
export default Works;
