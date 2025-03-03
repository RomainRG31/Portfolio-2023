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
            ? "Looking for an opportunity in the field of systems & networks. \n Passionate and motivate to learn more and more."
            : "À la recherche d'opportunité dans le domaine des systèmes & réseaux. \n Passionné et motivé à apprendre chaque jour."}
        </p>
        <p>
          {language === "en"
            ? "Knowledge is of no value unless \n you put it into practice."
            : "La connaissance n'a de valeur \n que si vous la mettez en pratique."}
        </p>
      </motion.div>
      <motion.div className="second-block" variants={elementVariants}>
        <p>{language === "en" ? "Portfolio 2025 of*" : "Portfolio 2025 de*"}</p>
        <p>{first_lastName}</p>
      </motion.div>
      <motion.div className="third-block" variants={elementVariants}>
        <div className="title-mini">
          <h3>{language === "en" ? "ABOUT ME" : "À PROPOS"}</h3>
        </div>
        <div className="sentence-about-me">
          <p>
            {language === "en"
              ? "Driven by a passion for IT development, I began my professional reconversion through web development, with a marked preference for the Javascript ecosystem. I now want to specialize in systems and network infrastructures in order to develop my expertise and progress in this field."
              : "Animé par une passion pour l'informatique, j'ai commencé ma reconversion professionnelle par le développement web, avec une préférence marquée pour l'écosystème Javascript. Je souhaite désormais me spécialiser dans les infrastructures systèmes et réseaux afin de développer mon expertise et évoluer dans ce domaine."}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
