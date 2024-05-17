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
        <p>{language === "en" ? "Portfolio 2024 of*" : "Portfolio 2024 de*"}</p>
        <p>{first_lastName}</p>
      </motion.div>
      <motion.div className="third-block" variants={elementVariants}>
        <div className="title-mini">
          <h3>{language === "en" ? "ABOUT ME" : "À PROPOS"}</h3>
        </div>
        <div className="sentence-about-me">
          <p>
            {language === "en"
              ? "With a background as a work manager in industrial cleaning and experience as a mountain gunner, I am moving towards web development, favoring the frontend with React, Typescript and Nextjs. My goal is to join a company for a work-study program, from September 26, with a schedule of 3 weeks in the company/1 week at school over 15 months. as part of my bachelor's degree in application designer and developer at Wild Code School."
              : "Avec un fond en tant que responsable de travaux dans le nettoyage industriel et une expérience en tant qu'artilleur de montagne, je me dirige vers le développement web, privilégiant le frontend avec React, Typescript et Nextjs. Mon objectif est d'intégrer une entreprise pour une alternance, dès le 26 septembre, avec un rythme de 3 semaines en entreprise/1 semaine à l'école sur 15 mois. dans le cadre de mon bachelor de concepteur développeur d'applications à la Wild Code School."}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
