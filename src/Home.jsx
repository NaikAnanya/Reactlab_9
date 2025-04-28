import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  const linkStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <div>
      

      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      
      <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>
        We are dedicated to providing top-quality services and solutions to our clients.
        Explore our website to learn more about what we offer and how we can work together.
      </p>
    </div>
   
  );
}

export default Home;
