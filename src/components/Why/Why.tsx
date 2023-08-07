import "./Why.css";
import arrowDown from "../../assets/img/arrowDown.svg";
import arrowUp from "../../assets/img/arrowUp.svg";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

interface IWhyInfos {
  order: string;
  sentence: string;
  description: string;
}

const dropdownVariants = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto", transition: { duration: 0.8 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.5 } },
};

const Why = ({ order, sentence, description }: IWhyInfos) => {
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };

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
    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={worksRef}
      animate={controls}
      variants={containerWorksVariants}
      initial="hidden"
      className={`g-container-whyComponent${open ? " open" : ""}`}
    >
      <div className="container-content" onClick={handleDropdown}>
        <p>/ {order}</p>
        <p>{sentence}</p>
        <motion.img
          src={open ? arrowDown : arrowUp}
          alt="arrowUp"
          initial={{ rotate: 0 }}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="dropdownContent"
            variants={dropdownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <p>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Why;
