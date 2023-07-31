import "./Why.css";
import arrowDown from "../../assets/img/arrowDown.svg";
import arrowUp from "../../assets/img/arrowUp.svg";
import { useState } from "react";

interface IWhyInfos {
  order: string;
  sentence: string;
  description: string;
}

const Why = ({ order, sentence, description }: IWhyInfos) => {
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };
  return (
    <div className="g-container-whyComponent">
      <div className="container-content" onClick={handleDropdown}>
        <p>/ {order}</p>
        <p>{sentence}</p>
        <img src={open ? arrowDown : arrowUp} alt="arrowUp" />
      </div>
      {open && (
        <div className="dropdownContent">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Why;
