import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatePersonalInfo, updateSkills } from '../redux/resumeSlice';
import { dummyResume } from '../data/dummyData';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Hum 4 sample/pre-defined templates ka array banate hain
  const templates = [
    { id: 1, title: 'Professional Modern', themeColor: '#007bff', data: dummyResume },
    { id: 2, title: 'Creative Designer', themeColor: '#28a745', data: dummyResume },
    { id: 3, title: 'Executive Corporate', themeColor: '#dc3545', data: dummyResume },
    { id: 4, title: 'Minimalist Clean', themeColor: '#ffc107', data: dummyResume },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  const handleUseTemplate = (templateData) => {
    // Template select hone par Redux state update karein aur Details filling page par bhej dein
    dispatch(updatePersonalInfo(templateData.personalInfo));
    dispatch(updateSkills(templateData.skills));
    navigate('/fill-details');
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Welcome to Resume Builder</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Build your professional resume quickly and easily with Redux and React. Choose a template below to get started!
      </p>

      {/* Action Buttons */}
      <div style={{ marginBottom: '40px' }}>
        <Link to="/fill-details" style={{ marginRight: '15px', padding: '10px 20px', background: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
          Create Custom Resume
        </Link>
        <Link to="/about" style={{ padding: '10px 20px', background: '#6c757d', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
          About Us
        </Link>
      </div>

      {/* Pre-defined Templates Section */}
      <h2>Pre-defined Resume Templates</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
        {templates.map((tpl) => (
          <div 
            key={tpl.id}
            onMouseEnter={() => setHoveredId(tpl.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{ 
              position: 'relative',
              border: `2px solid ${tpl.themeColor}`, 
              borderRadius: '8px', 
              padding: '20px', 
              background: '#fff',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
              transform: hoveredId === tpl.id ? 'translateY(-5px)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '150px'
            }}
          >
            <div>
              <div style={{ width: '40px', height: '8px', background: tpl.themeColor, margin: '0 auto 15px auto', borderRadius: '4px' }}></div>
              <h4 style={{ margin: '10px 0', color: '#333' }}>{tpl.title}</h4>
              <p style={{ fontSize: '13px', color: '#777' }}>Ready-to-use professional layout.</p>
            </div>

            {/* Hover par dikhne wala "Use Template" Button */}
            {hoveredId === tpl.id && (
              <button 
                onClick={() => handleUseTemplate(tpl.data)}
                style={{ 
                  marginTop: '15px',
                  padding: '8px 12px', 
                  background: tpl.themeColor, 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                Use Template
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}