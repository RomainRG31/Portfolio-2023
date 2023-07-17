import "./Mail.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

const Mail = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="g-mail-block">
      <div id="Contact" className="mail-sentence">
        <p>
          {language === "en"
            ? "Let's Get started with me. \n One click away."
            : "Commencer avec moi. \n Un clic seulement."}
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
