import React from 'react';
import './Education.css';
import HunterLogo from "../hunterlogo.jpg";

const Education = () => {
	return (
		<div className='container education'>
		<h1 className='header'><strong>EDUCATION</strong></h1>
		<br />
			<div className='row'>
				<div className='col-lg-1'>
					<img src={HunterLogo} alt="hunter-logo" className='college-logo' />
				</div>
				<div className='col-lg-1'></div>
				<div className='col-lg-6'>
					<p className='institution'><strong>Hunter College</strong></p>
					<p className='degree'><i>B.A. in Computer Science, Minor in Mathematics</i></p>
					<p className='duration'>July 2020 - Present</p>
				</div>
			</div>
		</div>
	);
}

export default Education;
