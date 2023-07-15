import Layout from "../components/layout/Layout";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import { dataProjects } from "../utils/dataProjects";

const Home = () => {
  return (
    <>
      <Layout>
        <About />
        <div className="container-dataProjects">
          <div className="title-mini">
            <h3>PROJECTS</h3>
          </div>
          <div className="g-container-dataProjects">
            {dataProjects.map((infos) => (
              <Projects
                order={infos.order}
                title={infos.title}
                button={infos.button}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
