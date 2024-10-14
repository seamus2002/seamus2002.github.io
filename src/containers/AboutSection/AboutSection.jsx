import Person from "../../components/Person/Person";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row flex-lg-row align-items-center">
          <div className="about-icon col-10 col-sm-8 col-lg-6">
            <Person />
          </div>
          <div className="col-lg-6">
            <h2 className="title py-3">A little about myself</h2>
            <p className="lead py-2">
              Hello! I'm Seamus! I am a dedicated Programmatic Commerce Associate at 
              OpenMind (GroupM/WPP) and a M.S. in Business Analytics candidate at 
              Baruch College. I also have a B.A. in Computer Science from Hunter 
              College.
            </p>
            <p className=" lead py-2">
              With a strong foundation in computer science and programmatic 
              advertising, I thrive in collaborative environments where I 
              can leverage my analytical skills to drive impactful insights 
              and strategic decisions. My previous experiences include 
              internships at Choreograph and LendKey Technologies, where 
              I honed my skills in data analysis and Python.
            </p>
            <p className="lead py-2">
              In the next five years, my vision is to deepen my expertise in the
              field of data science, with a strong focus on machine learning. I
              see machine learning as the frontier of data science, where
              data-driven insights evolve into predictive and prescriptive
              models that can revolutionize industries and solve complex
              problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
