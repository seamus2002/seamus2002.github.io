import Project from "../../components/Project/Project";
import "./ProjectsSection.css";
import menu from "../../assets/menu.jpeg";
import iss from "../../assets/iss.jpeg";

const ProjectsSection = () => {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="title text-center">My Projects</h2>
                <Project
                    name="Meun Mate"
                    desc="This is a project I created with the Spoonacular API. 
                    It allows the user to search for different types of recipes. 
                    Once a recipe has been selected, users can view detailed 
                    information about the recipe, including its ingredients, 
                    nutrition information, and step-by-step instructions. I made 
                    this website using React, Styled Components, and Framer Motion."
                    icon={menu}
                    liveLink="https://seamusenglish.com/menu-mate/"
                    sourceLink="https://github.com/seamus2002/menu-mate"
                />
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
