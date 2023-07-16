import "./Study.css";

interface IStudy {
  year: string;
  studies: string;
}

const Study = (study: IStudy) => {
  return (
    <div className="study-block">
      <hr></hr>
      <p className="study-year">{study.year}</p>
      <p>{study.studies}</p>
    </div>
  );
};
export default Study;
