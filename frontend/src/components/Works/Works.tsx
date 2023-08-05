import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Works.css";

interface IWorks {
  year: string;
  experiences: string;
}

const Works = (props: IWorks & { index: number }) => {
  const { year, experiences, index } = props;
  const paddingRight = index > 0 ? `${(index + 1) * 5}em` : "0";
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
      className="works-block"
      style={{ paddingRight }}
      ref={worksRef}
      animate={controls}
      variants={containerWorksVariants}
      transition={transition}
      initial="hidden"
    >
      <p className="works-year">{year}</p>
      <p>{experiences}</p>
    </motion.div>
  );
};

export default Works;
