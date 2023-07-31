import "./Study.css";

interface IStudies {
  year: string;
  study: string;
}

const Studies = (props: IStudies & { index: number }) => {
  const paddingLeft = props.index > 0 ? `${(props.index + 1) * 5}em` : "0";

  return (
    <div className="studies-block" style={{ paddingLeft }}>
      <p className="studies-year">{props.year}</p>
      <p>{props.study}</p>
    </div>
  );
};

export default Studies;
