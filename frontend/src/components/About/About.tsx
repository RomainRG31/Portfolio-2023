import "./About.css";

const About = () => {
  const first_lastName = "{Romain ROGER}";
  return (
    <div className="g-container-about">
      <div className="first-block">
        <p>
          Web developer from the south of FRANCE, Toulouse.
          <br />
          Passionate and motivate to learn more and more.
        </p>
        <p>
          Knowledge is of no value unless
          <br />
          you put it into practice.
        </p>
      </div>
      <div className="second-block">
        <p>Portfolio 2023 of*</p>
        <p>{first_lastName}</p>
      </div>
      <div className="third-block">
        <div className="title-mini">
          <h3>ABOUT ME</h3>
        </div>
        <div className="sentence-about-me">
          <p>
            After spending more than 6 years in the industrial cleaning sector,
            I wanted to convert to the IT environment as a web developer.
            Passionate about this field, I continually seek to improve myself by
            solidifying my bases and wanting to acquire new skills, which is why
            I am looking for a company for September 2023 as part of a
            work-study program at the pace of 3 business weeks / 1 school week
            for a period of 1 year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
