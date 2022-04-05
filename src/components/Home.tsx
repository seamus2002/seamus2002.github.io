import React from 'react';
import './Home.css';
import './rainbowText.css';

const Home = () => {
  return (
    <section id='home'>
      	<div className='intro'>
		  	  <h1>Hi, I'm Seamus.</h1>
      		<h1>I am a <span className='rainbow'>software engineer</span>.</h1>
      	</div>
    </section>
  );
}

export default Home;
