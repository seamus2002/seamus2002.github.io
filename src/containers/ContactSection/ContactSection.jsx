import ContactForm from "../../components/ContactForm/ContactForm";
import Letter from "../../components/Letter/Letter";
import "./ContactSection.css";

const ContactSection = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2 className="title text-center">Contact Me</h2>
                <div className="row flex-lg-row align-items-center">
                    <div className=" col-10 col-sm-8 col-lg-6 letter-icon">
                        <Letter />
                    </div>
                    <div className="col-lg-6 text-center">
                        <a className="btn btn-primary btn-lg mx-1" href="https://www.linkedin.com/in/seamusenglish/" role="button">LinkedIn <i className="bi bi-linkedin" /></a>
                        <a className="btn btn-secondary btn-lg mx-1" href="https://github.com/seamus2002" role="button">GitHub <i className="bi bi-github" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
