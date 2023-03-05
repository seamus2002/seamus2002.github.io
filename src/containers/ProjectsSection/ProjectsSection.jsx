import Project from "../../components/Project/Project";
import "./ProjectsSection.css";
import iss from "../../assets/iss.jpeg";

const ProjectsSection = () => {
    return (
        <section id="projects">
            <div className="container py-5">
                <h2 className="title text-center">My Projects</h2>
                <Project
                    name="International Space Station Tracker"
                    desc="This website displays the ISS's current lattitude,
                    longitude, andaltitude, providing users with an immersive
                    and accurate experience of the station's orbit around the
                    Earth. The website leverages the Leaflet JavaScript library
                    to create an interactive map of the current location."
                    icon={iss}
                    liveLink="https://seamusenglish.com/iss-tracker/"
                    sourceLink="https://github.com/seamus2002/iss-tracker"
                />
            </div>
        </section>
    );
};

export default ProjectsSection;
