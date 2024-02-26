import React from 'react';
import '../styles/Home.scss';

/*
  Home component for the landing page.
  Displays a background image with text overlay.
*/
const Home = () => {
  return (
    <div className='home-container'>
      {/* Background image */}
      <div className='background-image'></div>
      
      {/* Text section */}
      <div className='home-text-section'>
        <h1>We Are India</h1> 
        <h2>Judega Bharat, Jeetega India</h2>
      </div>
    </div>
  );
}

export default Home;
