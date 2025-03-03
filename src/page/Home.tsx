import { Layout, About, Projects, Works, Why, Mail, Studies } from "../Import";
import { dataProjects, projectTranslations } from "../utils/dataProjects";
import {
  dataWorks,
  translations as worksTranslations,
} from "../utils/dataWorks";
import {
  dataStudies,
  translations as studiesTranslations,
} from "../utils/dataStudies";
import { dataWhy, translations as whyTranslations } from "../utils/dataWhy";
import { Link } from "react-router-dom";
import CV from "../downloads/cv_airbus.pdf";
import { LanguageContext } from "../LanguageContext";
import { useContext, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Helmet } from "react-helmet";

const Home = () => {
  const faq = "{/faq/}";
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

    const currentWorksRef = worksRef.current;

    if (currentWorksRef) {
      observer.observe(currentWorksRef);
    }

    return () => {
      if (currentWorksRef) {
        observer.unobserve(currentWorksRef);
      }
    };
  }, [controls]);

  const containerWorksVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://romainroger.vercel.app" />
        <meta
          property="og:title"
          content="Portfolio 2025 of Romain Gelder Gelder"
        />

        <meta
          property="og:site_name"
          content="Portfolio de Romain Gelder Roger 2025"
        />
      </Helmet>
      <Layout>
        <About />
        <div id="Projects"></div>
        <div className="container-dataProjects">
          <div className="title-mini">
            <h3>{language === "en" ? "PROJECTS" : "PROJETS"}</h3>
          </div>
          <div className="g-container-dataProjects">
            {dataProjects.map((infos, index) => (
              <Projects
                key={index}
                order={infos.order}
                title={
                  projectTranslations[language]?.[
                    infos.title as keyof (typeof projectTranslations)[typeof language]
                  ] || infos.title
                }
                link={infos.link}
              />
            ))}
          </div>
        </div>
        <div id="Works"></div>
        <div className="g-container-roadmap">
          <div className="container-works-header">
            <div className="h2-works">
              <h2>
                {language === "en" ? "Works \n roadmap" : "Feuille de \n route"}
              </h2>
              <div className="sentence-works">
                {language === "en"
                  ? "With a diversified professional experience and demonstrated success in different fields, my professional background highlights a passion for excellence and a proven ability to meet challenges with creativity and determination."
                  : "Fort d'une expérience professionnelle diversifiée et de succès démontrés dans différents domaines, mon parcours professionnel met en avant une passion pour l'excellence et une capacité éprouvée à relever les défis avec créativité et détermination."}
              </div>
            </div>
            <div className="btn-download-works">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWklEQVR4nO2ZwU7DMAyGbT8lh5bX4LgBFw4TJw6TeJRp9vtwioF7UFamdSiFceiUJv8nWYrUVMr/N7HdlggAAAAAAICrsook5tKnSGNqjb3LrbnE7+ipNcx5fTKA19QaBgMYO8BwBAQ5wJAEBVXAUAYZfQC1hqEPYPQBhj5A0AcY+gCptw9Q50dz+bTAmxiJL60Caa4Gfk73qvMDLRV1+RiJ3I5NmDIgzUlzj9fU5Z2Wig5PMeZMyBnwU/whAm9oqcRB0MtYkAZ+HT6Inhvw21xaMnFCmDnfjw2oUvyR3NbWIG+5cS5fVEHM7IRcVPXk/2tC1eL/MqEJ8VMmNCX+zIQgNymqS3hVsir8b+7s69sX/jd39vVZ4Z+wZl+fwQDGDjAcAUEOMCRBQRWw1sugOu80yF1R4by7Yh8ghccsBkhfhriLopvrZaMz56eyQ7oSX9YAAAAAAAAVxhdYO03XQzH2qwAAAABJRU5ErkJggg==" />
              <Link to={CV} className="btn-download" target="_blank" download>
                {language === "en" ? "[ DOWNLOAD ]" : "[ TELECHARGER ]"}
              </Link>
            </div>
          </div>
          <div className="g-container-dataWorks">
            <h2>{language === "en" ? "Works" : "Travail"}</h2>
            {dataWorks.map((works, index) => (
              <div
                key={works.year}
                style={{
                  paddingRight: index === 0 ? "5%" : `${(index + 1) * 9}%`,
                }}
              >
                <Works
                  key={index}
                  year={works.year}
                  experiences={
                    worksTranslations[
                      language as keyof typeof worksTranslations
                    ]?.[
                      works.experiences as keyof (typeof worksTranslations)["fr"]
                    ] || ""
                  }
                  index={0}
                />
              </div>
            ))}
          </div>
          <div className="g-container-dataStudies">
            <h2>{language === "en" ? "Studies" : "Études"}</h2>
            {dataStudies.map((studies, index) => (
              <div
                key={studies.year}
                style={{
                  paddingLeft: index === 0 ? "5%" : `${(index + 1) * 10}%`,
                }}
              >
                <Studies
                  key={index}
                  year={studies.year}
                  study={
                    studiesTranslations[
                      language as keyof typeof studiesTranslations
                    ]?.[
                      studies.study as keyof (typeof studiesTranslations)["fr"]
                    ] || ""
                  }
                  index={0}
                />
              </div>
            ))}
          </div>
        </div>
        <motion.div
          ref={worksRef}
          animate={controls}
          variants={containerWorksVariants}
          initial="hidden"
          className="faq-container"
        >
          <p>{faq}</p>
        </motion.div>
        <div className="g-container-why">
          {dataWhy.map((data, index) => (
            <Why
              key={index}
              order={data.order}
              sentence={
                whyTranslations[language as keyof typeof whyTranslations][
                  data.sentence as keyof (typeof whyTranslations)["fr"]
                ]
              }
              description={
                whyTranslations[language as keyof typeof whyTranslations][
                  data.description as keyof (typeof whyTranslations)["fr"]
                ]
              }
            />
          ))}
        </div>
        <div id="Contact"></div>
        <Mail />
      </Layout>
    </div>
  );
};

export default Home;
