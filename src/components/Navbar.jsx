import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '15px 30px', 
      backgroundColor: '#343a40', 
      color: '#fff' 
    }}>
      <h2 style={{ margin: 0, fontSize: '22px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          ResumeBuilder
        </Link>
      </h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>
          Home
        </Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>
          About Us
        </Link>
      </div>
    </nav>
  );
}