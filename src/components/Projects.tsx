import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

import projects from '../data/projects';

const Projects = () => {
	const createCard = (project: any) => {
		return (
			<div className="row flex-lg-row align-items-center g-5 py-5 text-start">
				<div className="col-10 col-sm-8 col-lg-6">
					<img src={ project.logo } className="d-block mx-lg-auto img-fluid" alt={ project.name } width="700" height="500" loading="lazy" />
				</div>
				<div className="col-lg-6">
					<h3 className="fw-bold lh-1 mb-3">{ project.name }</h3>
					{project.skills.map((skill: any) => <span className="badge bg-info text-dark">{skill}</span>)}
					<br />
					<br />
					<p className="lead">{ project.description }</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-start">
					<a href={ project.liveLink } target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Version</a>
					<a href={ project.repoLink } target="_blank" rel="noopener noreferrer" className="btn btn-light">GitHub Repo</a>
					</div>
				</div>
			</div>
		);
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
