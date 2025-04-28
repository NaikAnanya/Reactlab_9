import React from 'react';
import { NavLink } from 'react-router-dom';

function Contact() {
  const linkStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <div>
      

      <h1>Contact Page</h1>
      <p>You can reach us at contact@example.com.</p>
      <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>
        We'd love to hear from you! Whether you have a question, feedback, or need support, 
        feel free to reach out.
      </p>
      <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>
        <strong>Email:</strong> support@ourcompany.com<br />
        <strong>Phone:</strong> +1 (123) 456-7890<br />
        <strong>Address:</strong> 1234 Innovation Drive, Suite 100, City, Country
      </p>
    </div>
  );
}

export default Contact;
