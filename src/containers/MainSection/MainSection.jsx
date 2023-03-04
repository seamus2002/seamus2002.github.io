import AppTypewriter from "../../components/AppTypewritter/AppTypewriter";
import Laptop from "../../components/Laptop/Laptop";
import "./MainSection.css";

const MainSection = () => {
    return (
        <section className="content">
            <div className="header left">
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
            <div className="homeMainIcon right">
                <Laptop />
            </div>
        </section>
    );
};

export default MainSection;
