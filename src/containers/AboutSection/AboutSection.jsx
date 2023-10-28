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
              Hello! I'm Seamus, and I'm thrilled to share my journey into the
              exciting world of data science and my aspirations for the future.
              I am committed to learning and growing every day, and I believe
              that with hard work and dedication, anything is possible.
            </p>
            <p className=" lead py-2">
              My journey into data science began with a spark of interest during
              my time as a web developer. While working on various web projects,
              I couldn't help but notice the significance of data-driven
              decisions in optimizing user experiences. The world of analytics
              and data-driven insights opened up a new dimension of
              understanding user behavior and system performance.
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
