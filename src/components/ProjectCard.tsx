import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props: any) => {
  return (
    <div className="card bg-dark mx-auto">
        <img src={props.logo} className="card-img-top" alt='project' />
        <div className="card-body text-start">
            <h5 className="card-title"><strong>{props.name}</strong></h5>
            <p className="card-text">{props.description}</p>
            {props.skills.map((skill: any) => <span className="badge bg-info text-dark">{skill}</span>)}
        </div>
        <div className="card-footer">
			<div className="btn-group">
				<a href={props.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Version</a>
				<a href={props.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-light">GitHub Repo</a>
			</div>
        </div>
    </div>
  );
}

export default ProjectCard;
