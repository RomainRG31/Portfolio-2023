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
  const projectsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const node = projectsRef.current;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        void controls.start("visible");
      } else {
        void controls.start("hidden");
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [controls]);

  const containerProjectsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.5 };

  return (
    <motion.div
      id="Projects"
      className="g-container-projects"
      ref={projectsRef}
      animate={controls}
      variants={containerProjectsVariants}
      transition={transition}
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
