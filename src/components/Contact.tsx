import React from 'react';
import linkedinLogo from './logos/linkedin.svg';
import githubLogo from './logos/github.svg';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contact'>
		<div className="container">
		<h1 className='header'><strong>CONTACT ME</strong></h1>
		<br />
		<p>Don't hesitate to contact me by email or using any of my social media links below. I could be in the market for a new role or new opportunities!</p>
		<br />
		<p>Feel free to send me a message to provide feedback, give constructive criticism on my portfolio website or just to connect!</p>

			<div className='row'>
				<div className='col'>
					<img src={linkedinLogo} alt='linkedin' className='contact-logo' />
					<br />
					<a href='https://www.linkedin.com/in/seamus-english-804b121b0/' target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-primary logo-button">LinkedIn</button></a>
				</div>
				<div className='col'>
					<img src={githubLogo} alt='github' className='contact-logo' />
					<br />
					<a href='https://github.com/seamus2002/' target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-light logo-button">GitHub</button></a>
				</div>
			</div>
			
		</div>
    </section>
  );
}

export default Contact;
