import Person from "../../components/Person/Person";
import "./AboutSection.css";

const AboutSection = () => {
    return (
        <section id="about">
            <p>About Section</p>
            <div className="container">
                <div className="row flex-lg-row align-items-center py-5">
                    <div className="about-icon col-10 col-sm-8 col-lg-6">
                        <Person />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="title py-3">A little about myself</h2>
                        <p className="py-2">
                            Hello and welcome to my website! My name is Seamus,
                            and I am a web developer in training. I am
                            passionate about technology and the power it has to
                            transform people's lives. I am committed to learning
                            and growing every day, and I believe that with hard
                            work and dedication, anything is possible.
                        </p>
                        <p className="py-2">
                            In addition to coding, I am passionate about gaming,
                            traveling, and helping people, and I believe that my
                            diverse interests and experiences help me approach
                            problems from unique perspectives. I am a lifelong
                            learner and enjoy staying up-to-date with the latest
                            trends and advancements in the field.
                        </p>
                        <p className="py-2">
                            My ultimate goal is to become a proficient full
                            stack developer and work on projects that have a
                            positive impact on people's lives. I am excited to
                            continue learning and growing in this field, and I
                            look forward to connecting with others who share my
                            passion for technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
