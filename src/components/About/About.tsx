import "./About.css";
import { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../LanguageContext";

const About = () => {
  const first_lastName = "{Romain ROGER}";
  const { language } = useContext(LanguageContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.8 } },
  };

  const elementVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="g-container-about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="first-block" variants={elementVariants}>
        <p>
          {language === "en"
            ? "Web developer React from the south of FRANCE, Toulouse. \n Passionate and motivate to learn more and more."
            : "Développeur web React du sud de la FRANCE, Toulouse. \n Passionné et motivé à apprendre chaque jour."}
        </p>
        <p>
          {language === "en"
            ? "Knowledge is of no value unless \n you put it into practice."
            : "La connaissance n'a de valeur \n que si vous la mettez en pratique."}
        </p>
      </motion.div>
      <motion.div className="second-block" variants={elementVariants}>
        <p>{language === "en" ? "Portfolio 2023 of*" : "Portfolio 2023 de*"}</p>
        <p>{first_lastName}</p>
      </motion.div>
      <motion.div className="third-block" variants={elementVariants}>
        <div className="title-mini">
          <h3>{language === "en" ? "ABOUT ME" : "À PROPOS"}</h3>
        </div>
        <div className="sentence-about-me">
          <p>
            {language === "en"
              ? "After spending more than 6 years in the industrial cleaning sector, I wanted to convert to the IT environment as a web developer. Passionate about this field, I continually seek to improve myself by solidifying my bases and wanting to acquire new skills, which is why I am looking for a company for September 2023 as part of awork-study program at the pace of 3 business weeks / 1 school week for a period of 1 year."
              : "Après avoir passé plus de 6 ans dans le secteur du nettoyage industriel, j'ai souhaité me reconvertir dans le milieu informatique en tant que développeur web. Passionné par ce domaine, je cherche continuellement à m'améliorer en solidifiant mes bases et en voulant acquérir de nouvelles compétences, c'est pourquoi je suis à la recherche d'une entreprise pour septembre 2023 dans le cadre d'une alternance au rythme de 3 semaines d'entreprise / 1 semaine d'école pour une durée de 1 an."}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
