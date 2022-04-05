import React from 'react';
import './rainbowText.css';
import htmlLogo from './logos/html.svg';
import cssLogo from './logos/css.svg';
import jsLogo from './logos/javascript.svg';
import tsLogo from './logos/typescript.svg';
import bootstrapLogo from './logos/bootstrap.svg';
import reactLogo from './logos/react.svg';
import nodeLogo from './logos/node.svg';
import postgresLogo from './logos/postgres.svg';
import mongodbLogo from './logos/mongodb.svg';
import cppLogo from './logos/cpp.svg';
import pythonLogo from './logos/python.svg'
import './Skills.css';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <div className='container skills'>
        <h1><strong>MY <span className='rainbow'>SKILLS</span></strong></h1>
        <br />
        <br />
        <div className='row'>
            <div className='col'>
                <SkillCard 
                    logo={htmlLogo}
                    skill='HTML'
                />
            </div>
            <div className='col'>
                <SkillCard 
                    logo={cssLogo}
                    skill='CSS'
                />
            </div>
            <div className='col'>
                <SkillCard 
                    logo={jsLogo}
                    skill='JavaScript'
                />
            </div>
            <div className='col'>
                <SkillCard 
                    logo={tsLogo}
                    skill='TypeScript'
                />
            </div>
            <div className='col'>
                <SkillCard 
                    logo={reactLogo}
                    skill='React'
                />
            </div>
            <div className='col'>
                <SkillCard 
                    logo={bootstrapLogo}
                    skill='Bootstrap'
                />
            </div>
            <div className='col'>
                <SkillCard 
                    logo={nodeLogo}
                    skill='Node'
                />
            </div>
        </div>
        <br />
        <br />
    </div>
  );
}

export default Skills;
