import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
  const linkStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <div>
      

      <h1>About Page</h1>
      <p>This is the About page.</p>
      <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>
        Our Company was founded with the mission to innovate and lead in our industry.
        With a passionate team and a commitment to excellence, we strive to exceed expectations
        and deliver outstanding results for our partners and clients.
      </p>
      <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>
        Our core values include integrity, innovation, and customer satisfaction.
      </p>
    </div>
  );
}

export default About;
