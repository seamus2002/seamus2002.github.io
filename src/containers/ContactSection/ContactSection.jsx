import ContactForm from "../../components/ContactForm/ContactForm";
import Letter from "../../components/Letter/Letter";
import "./ContactSection.css";

const ContactSection = () => {
    return (
        <section id="contact">
            <div className="container py5">
                <h2 className="title text-center">Contact Me</h2>
                <div className="row flex-lg-row align-items-center py-5">
                    <div className=" col-10 col-sm-8 col-lg-6 letter-icon">
                        <Letter />
                    </div>
                    <div className="col-lg-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
