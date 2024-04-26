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
              ? "With a background as a work manager in industrial cleaning and experience as a mountain gunner, I am moving towards web development, favoring the frontend with React but open to other languages and the backend. My goal is to join a company for a work-study program, from October 7, as part of my bachelor's degree in application designer and developer at the CESI engineering school in Labège. This course, alternating (3 weeks in a company/1 week at school) over one year, is a step towards my ambition to pursue a master's degree. I am determined to deepen my knowledge and skills in this area."
              : "Avec un fond en tant que responsable de travaux dans le nettoyage industriel et une expérience en tant qu'artilleur de montagne, je me dirige vers le développement web, privilégiant le frontend avec React mais ouvert à d'autres langages et au backend. Mon objectif est d'intégrer une entreprise pour une alternance, dès le 7 octobre, dans le cadre de mon bachelor de concepteur développeur d'applications à l'école d'ingénieurs CESI à Labège. Ce parcours, en alternance (3 semaines en entreprise/1 semaine à l'école) sur un an, est une étape vers mon ambition de poursuivre en master. Je suis déterminé à approfondir mes connaissances et compétences dans ce domaine."}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
