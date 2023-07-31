import "./Works.css";

interface IWorks {
  year: string;
  experiences: string;
}

const Works = (props: IWorks & { index: number }) => {
  const paddingRight = props.index > 0 ? `${(props.index + 1) * 5}em` : "0";

  return (
    <div className="works-block" style={{ paddingRight }}>
      <p className="works-year">{props.year}</p>
      <p>{props.experiences}</p>
    </div>
  );
};

export default Works;
