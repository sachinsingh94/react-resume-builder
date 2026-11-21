import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>About Resume Builder</h2>
      <p style={{ marginTop: '15px', lineHeight: '1.6' }}>
        This application is built using React.js and Redux Toolkit as part of full-stack web development training. 
        It allows users to seamlessly fill out their professional details and preview a clean, structured resume.
      </p>
      <div style={{ marginTop: '30px' }}>
        <Link to="/" style={{ padding: '10px 20px', background: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}