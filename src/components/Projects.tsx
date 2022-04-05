import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  return (
    <section id='projects'>
        <div className='container projects'>
        	<h1 className='header'><strong>MY PROJECTS</strong></h1>
			<br />
			<div className='row'>
				<div className='col'>
					<ProjectCard />
				</div>
			</div>
        </div>
    </section>
  );
}

export default Projects;
