import Layout from "../components/layout/Layout";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import { dataProjects, translations } from "../utils/dataProjects";
import Works from "../components/Works/Works";
import { dataWorks } from "../utils/dataWorks";
import { dataStudies } from "../utils/dataStudies";
import Study from "../components/Study/Study";
import Why from "../components/Why/Why";
import Mail from "../components/Mail/Mail";
import { Link } from "react-router-dom";
import CV from "../downloads/CV-2023.pdf";
import { LanguageContext } from "../LanguageContext";
import { useContext } from "react";

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <Layout>
        <About />
        <div id="Projects" className="container-dataProjects">
          <div className="title-mini">
            <h3>{language === "en" ? "PROJECTS" : "PROJETS"}</h3>
          </div>
          <div className="g-container-dataProjects">
            {dataProjects.map((infos, index) => (
              <Projects
                key={index}
                order={infos.order}
                title={translations[language][infos.title]} // Utilisez la traduction correspondante pour le titre
                link={infos.link}
              />
            ))}
          </div>
        </div>
        <div id="Works" className="g-container-roadmap">
          <div className="container-works-header">
            <div className="h2-works">
              <h2>
                Works
                <br /> roadmap
              </h2>
              <div className="sentence-works">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                asperiores inventore animi non necessitatibus distinctio
                adipisci. Harum voluptas dolore ipsa at! Cumque a dolorum rem
                alias quas libero suscipit assumenda!
              </div>
            </div>
            <div className="btn-download-works">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWklEQVR4nO2ZwU7DMAyGbT8lh5bX4LgBFw4TJw6TeJRp9vtwioF7UFamdSiFceiUJv8nWYrUVMr/N7HdlggAAAAAAICrsook5tKnSGNqjb3LrbnE7+ipNcx5fTKA19QaBgMYO8BwBAQ5wJAEBVXAUAYZfQC1hqEPYPQBhj5A0AcY+gCptw9Q50dz+bTAmxiJL60Caa4Gfk73qvMDLRV1+RiJ3I5NmDIgzUlzj9fU5Z2Wig5PMeZMyBnwU/whAm9oqcRB0MtYkAZ+HT6Inhvw21xaMnFCmDnfjw2oUvyR3NbWIG+5cS5fVEHM7IRcVPXk/2tC1eL/MqEJ8VMmNCX+zIQgNymqS3hVsir8b+7s69sX/jd39vVZ4Z+wZl+fwQDGDjAcAUEOMCRBQRWw1sugOu80yF1R4by7Yh8ghccsBkhfhriLopvrZaMz56eyQ7oSX9YAAAAAAAAVxhdYO03XQzH2qwAAAABJRU5ErkJggg==" />
              <Link to={CV} className="btn-download" target="_blank" download>
                [ DOWNLOAD ]
              </Link>
            </div>
          </div>
          <div className="g-container-dataWorks">
            {dataWorks.map((works) => (
              <Works year={works.year} experiences={works.experiences} />
            ))}
          </div>
          <div className="g-container-dataStudies">
            {dataStudies.map((study) => (
              <Study year={study.year} studies={study.study} />
            ))}
          </div>
        </div>
        <Why />
        <Mail />
      </Layout>
    </>
  );
};

export default Home;
