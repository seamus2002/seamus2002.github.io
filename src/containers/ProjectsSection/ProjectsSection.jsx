import { useState } from "react";
import DataScienceProjectsContainer from "../../components/DataScienceProjectsContainer/DataScienceProjectsContainer";
import WebDevProjectsContainer from "../../components/WebDevProjectsContainer/WebDevProjectsContainer";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const [activeContainer, setActiveContainer] = useState("dataScience");

  const handleContainerChange = (container) => {
    setActiveContainer(container);
  };

  return (
    <section id="projects">
      <div className="container">
        <h2 className="title text-center">My Projects</h2>
        <br />
        <div className="text-center">
          <div className="btn-group" role="group" aria-label="Project Switcher">
            <button
              type="button"
              className={`btn btn-outline-primary ${
                activeContainer === "dataScience" ? "active" : ""
              }`}
              onClick={() => handleContainerChange("dataScience")}
            >
              Data Analytics
            </button>
            <button
              type="button"
              className={`btn btn-outline-primary ${
                activeContainer === "webDev" ? "active" : ""
              }`}
              onClick={() => handleContainerChange("webDev")}
            >
              Web Development
            </button>
          </div>
        </div>
        {activeContainer === "dataScience" ? (
          <DataScienceProjectsContainer />
        ) : null}
        {activeContainer === "webDev" ? <WebDevProjectsContainer /> : null}
      </div>
    </section>
  );
};

export default ProjectsSection;
