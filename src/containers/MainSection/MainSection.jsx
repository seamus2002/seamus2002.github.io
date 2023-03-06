import AppTypewriter from "../../components/AppTypewritter/AppTypewriter";
import Laptop from "../../components/Laptop/Laptop";
import "./MainSection.css";

const MainSection = () => {
    return (
        <section className="container min-vh-100 main-section">
            <div className="row flex-lg-row-reverse align-items-center">
                <div className="homeMainIcon col-10 col-sm-8 col-lg-6">
                    <Laptop />
                </div>
                <div className="header col-lg-6">
                    <h2 className="title">Hello!</h2>
                    <h1 className="mainTitle">
                        I'm <strong className="mainName">Seamus English</strong>
                    </h1>
                    <div style={{ paddingTop: 50 }}>
                        <AppTypewriter
                            strings={[
                                "Full Stack Web Developer",
                                "Front End Web Developer",
                                "Continuously Learning",
                            ]}
                            wrapperClassName="typewriterWrapper"
                            cursorClassName="typewriterCursor"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;
