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
              My fascination with data science can be traced back to my academic
              journey. I pursued a degree in Computer Science and was initially
              drawn to this field during a big data course. I was intrigued by
              the power of making sense of complex data and the potential it
              held for solving real-world problems. I soon realized that this
              was the beginning of a lifelong journey for me.
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
