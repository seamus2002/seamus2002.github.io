import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

import projects from '../data/projects';

const Projects = () => {
	const createCard = (project: any) => {
		return (
			<div className='col d-flex'>
				<ProjectCard
					key={project.id}
					name={project.name}
					logo={project.logo}
					description={project.description}
					skills={project.skills}
					liveLink={project.liveLink}
					repoLink={project.repoLink}
				/>
			</div>
		)
	}

	return (
		<section id='projects'>
			<div className='container projects'>
				<h1 className='header'><strong>MY PROJECTS</strong></h1>
				<br />
				<div className='row'>
					{projects.map(createCard)}
				</div>
			</div>
		</section>
	);
}

export default Projects;
