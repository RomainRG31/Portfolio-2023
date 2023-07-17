import "./Mail.css";
import { Link } from "react-router-dom";

const Mail = () => {
  return (
    <div className="g-mail-block">
      <div id="Contact" className="mail-sentence">
        <p>
          Let's Get started with me.
          <br />
          One click away.
        </p>
        <Link to="mailto:romain32.roger@gmail.com">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/new-post--v1.png"
            alt="new-post--v1"
          />
        </Link>
      </div>
    </div>
  );
};

export default Mail;
