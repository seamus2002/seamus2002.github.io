import React from 'react';
import './About.css';
import Education from './Education';
import Skills from './Skills';
import Summary from './Summary';

const About = () => {
  return (
    <section id='about'>
        <div className='container'>
            <Summary />
            <Education />
			<Skills />
        </div>
    </section>
  );
}

export default About;
