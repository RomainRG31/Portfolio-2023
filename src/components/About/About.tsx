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
              ? "Driven by a passion for IT development, I began a professional reconversion to specialize in web development, with a marked preference for the React ecosystem. I want to bring my determination and my desire to improve my skills within a team of specialists."
              : "Animé par une passion pour le développement informatique, j'ai entamé une reconversion professionnelle pour me spécialiser dans le développement web, avec une préférence marquée pour l'écosystème React. Je souhaite apporter ma détermination et mon envie de monter en compétences au sein d'une équipe de spécialistes."}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
