import "./App.css";
import Footer from "./components/Footer/Footer";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import AboutSection from "./containers/AboutSection/AboutSection";
import ContactSection from "./containers/ContactSection/ContactSection";
import MainSection from "./containers/MainSection/MainSection";
import ProjectsSection from "./containers/ProjectsSection/ProjectsSection";

function App() {
    return (
        <div className="App">
            <ParticlesBackground />
            <MainSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;
