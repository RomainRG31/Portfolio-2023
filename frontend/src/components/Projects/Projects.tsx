import { useContext, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../LanguageContext";
import "./Projects.css";

interface IProjectsInfo {
  order: string;
  title: string;
  link: string;
}

const Projects = ({ order, title, link }: IProjectsInfo) => {
  const { language } = useContext(LanguageContext);
  const projectsRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Set this threshold value based on your preference
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, [controls]);

  const containerProjectsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 6000 },
  };

  return (
    <motion.div
      id="Projects"
      className="g-container-projects"
      ref={projectsRef}
      animate={controls}
      variants={containerProjectsVariants}
      initial="hidden"
    >
      <hr />
      <div className="order-title">
        <span className="order">{order}</span>
        <p className="title">{title}</p>
      </div>
      <div className="btn-p">
        <Link to={link} className="view-projects">
          {language === "en" ? "[ VIEW PROJECTS ]" : "[ VOIR PROJETS ]"}
        </Link>
      </div>
    </motion.div>
  );
};

export default Projects;
