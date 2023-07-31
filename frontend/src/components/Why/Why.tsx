import "./Why.css";
import arrowDown from "../../assets/img/arrowDown.svg";
import arrowUp from "../../assets/img/arrowUp.svg";

const Why = () => {
  return (
    <div className="g-container-why">
      <div className="container-content">
        <p>/ 01</p>
        <p>Why should you take me on alternance ?</p>
        <img src={arrowUp} alt="arrowUp" />
      </div>
      <div className="container-content">
        <p>/ 02</p>
        <p>What are the advantages of hiring a work-study student?</p>{" "}
        <img src={arrowUp} alt="arrowUp" />
      </div>
      <div className="container-content">
        <p>/ 03</p>
        <p>Should you trust me?</p>
        <img src={arrowUp} alt="arrowUp" />
      </div>
    </div>
  );
};

export default Why;
