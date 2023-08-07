import "./Mail.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Mail = () => {
  const { language } = useContext(LanguageContext);
  const worksRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
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

    if (worksRef.current) {
      observer.observe(worksRef.current);
    }

    return () => {
      if (worksRef.current) {
        observer.unobserve(worksRef.current);
      }
    };
  }, [controls]);

  const containerWorksVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.5 };

  return (
    <motion.div
      ref={worksRef}
      animate={controls}
      variants={containerWorksVariants}
      transition={transition}
      initial="hidden"
      className="g-mail-block"
    >
      <div className="mail-sentence">
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
    </motion.div>
  );
};

export default Mail;
