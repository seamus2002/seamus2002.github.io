import React from 'react';
import './Home.css';
import './rainbowText.css';

const Home = () => {
  return (
    <section id='home'>
      	<div className='intro'>
		  	<h1><strong>Hello, I'm Seamus.</strong></h1>
      		<h1><strong>I am a <span className='rainbow'>software developer</span>.</strong></h1>
      	</div>
    </section>
  );
}

export default Home;
