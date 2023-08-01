import "./Why.css";
import arrowDown from "../../assets/img/arrowDown.svg";
import arrowUp from "../../assets/img/arrowUp.svg";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface IWhyInfos {
  order: string;
  sentence: string;
  description: string;
}

const Why = ({ order, sentence, description }: IWhyInfos) => {
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };

  const worksRef = useRef(null);
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
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      ref={worksRef}
      animate={controls}
      variants={containerWorksVariants}
      initial="hidden"
      className="g-container-whyComponent"
    >
      <div className="container-content" onClick={handleDropdown}>
        <p>/ {order}</p>
        <p>{sentence}</p>
        <img src={open ? arrowDown : arrowUp} alt="arrowUp" />
      </div>
      {open && (
        <div className="dropdownContent">
          <p>{description}</p>
        </div>
      )}
    </motion.div>
  );
};

export default Why;
