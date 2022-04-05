import React from 'react';

interface Card {
    logo: string;
    skill: string;
}

const SkillCard = (props:Card) => {
  return (
    <div>
        <img src={props.logo} alt='logo' className='logo' />
        <p><strong>{props.skill}</strong></p>
    </div>
  );
}

export default SkillCard;
