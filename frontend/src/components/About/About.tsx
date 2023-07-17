import "./About.css";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
const About = () => {
  const first_lastName = "{Romain ROGER}";
  const { language } = useContext(LanguageContext);
  return (
    <div className="g-container-about">
      <div className="first-block">
        <p>
          {language === "en"
            ? "Web developer from the south of FRANCE, Toulouse. \n Passionate and motivate to learn more and more."
            : "Développeur web du sud de la FRANCE, Toulouse. \n Passionné et motivé à apprendre chaque jour."}
        </p>
        <p>
          {language === "en"
            ? "Knowledge is of no value unless \n you put it into practice."
            : "La connaissance n'a de valeur \n que si vous la mettez en pratique."}
        </p>
      </div>
      <div className="second-block">
        <p>{language === "en" ? "Portfolio 2023 of*" : "Portfolio 2023 de*"}</p>
        <p>{first_lastName}</p>
      </div>
      <div className="third-block">
        <div className="title-mini">
          <h3>{language === "en" ? "ABOUT ME" : "À PROPOS"}</h3>
        </div>
        <div className="sentence-about-me">
          <p>
            {language === "en"
              ? "After spending more than 6 years in the industrial cleaning sector, I wanted to convert to the IT environment as a web developer. Passionate about this field, I continually seek to improve myself by solidifying my bases and wanting to acquire new skills, which is why I am looking for a company for September 2023 as part of awork-study program at the pace of 3 business weeks / 1 school weekfor a period of 1 year."
              : "Après avoir passé plus de 6 ans dans le secteur du nettoyage industriel, j'ai souhaité me reconvertir dans le milieu informatique en tant que développeur web. Passionné par ce domaine, je cherche continuellement à m'améliorer en solidifiant mes bases et en voulant acquérir de nouvelles compétences, c'est pourquoi je suis à la recherche d'une entreprise pour septembre 2023 dans le cadre d'une alternance au rythme de 3 semaines d'entreprise / 1 semaine d'école pour une durée de 1 an."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
