import React from 'react';
import './ProjectCard.css';
import bankOfReact from './logos/bankofreact.png';

const ProjectCard = () => {
  return (
    <div className="card bg-dark mx-auto">
        <img src={bankOfReact} className="card-img-top" alt='bank-of-react' />
        <div className="card-body text-start">
            <h5 className="card-title"><strong>Bank of React</strong></h5>
            <p className="card-text">A basic banking user interface that uses an API to display sample debits and credits. Also has a customize feature to change text and background.</p>
            <span className="badge bg-info text-dark">React</span>
            <span className="badge bg-info text-dark">APIs</span>
            <span className="badge bg-info text-dark">JavaScript</span>
        </div>
    </div>
  );
}

export default ProjectCard;
