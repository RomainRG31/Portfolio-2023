import "./Study.css";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
interface IStudies {
  year: string;
  study: string;
}

const Studies = (props: IStudies & { index: number }) => {
  const { year, study, index } = props;
  const paddingLeft = index > 0 ? `${(index + 1) * 5}em` : "0";
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
      className="studies-block"
      style={{ paddingLeft }}
    >
      <p className="studies-year">{year}</p>
      <p>{study}</p>
    </motion.div>
  );
};

export default Studies;
