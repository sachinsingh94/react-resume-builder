import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import SuccessModal from '../components/SuccessModal';
import { Button, Box } from '@mui/material';

export default function Preview() {
  const personalInfo = useSelector((state) => state.resume.personalInfo);
  const education = useSelector((state) => state.resume.education);
  const experience = useSelector((state) => state.resume.experience);
  const skills = useSelector((state) => state.resume.skills);
  
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // PDF Content Generation
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(personalInfo.fullName || "Your Name", 20, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`${personalInfo.email || 'email@example.com'} | ${personalInfo.phone || '+91 00000 00000'} | ${personalInfo.address || 'City, Country'}`, 20, 30);

    doc.setFont("helvetica", "bold");
    doc.text("Professional Summary", 20, 45);
    doc.setFont("helvetica", "normal");
    doc.text(personalInfo.summary || 'No summary provided.', 20, 53, { maxWidth: 170 });

    doc.setFont("helvetica", "bold");
    doc.text("Education", 20, 75);
    doc.setFont("helvetica", "normal");
    let eduY = 83;
    education.forEach((edu) => {
      doc.text(`${edu.degree || ''} - ${edu.institution || ''} (${edu.year || ''})`, 20, eduY);
      eduY += 8;
    });

    doc.setFont("helvetica", "bold");
    doc.text("Experience", 20, eduY + 10);
    doc.setFont("helvetica", "normal");
    let expY = eduY + 18;
    experience.forEach((exp) => {
      doc.text(`${exp.role || ''} at ${exp.company || ''} (${exp.duration || ''})`, 20, expY);
      doc.text(exp.description || '', 20, expY + 6, { maxWidth: 170 });
      expY += 20;
    });

    doc.setFont("helvetica", "bold");
    doc.text("Skills", 20, expY + 10);
    doc.setFont("helvetica", "normal");
    doc.text(skills.length > 0 ? skills.join(', ') : 'No skills added.', 20, expY + 18);

    doc.save("resume.pdf");
    setModalOpen(true);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '700px', margin: '0 auto', background: '#f9f9f9', border: '1px solid #ddd' }}>
      <div style={{ textAlign: 'center', borderBottom: '2px solid #333', paddingBottom: '20px' }}>
        <h1>{personalInfo.fullName || 'Your Name'}</h1>
        <p>{personalInfo.email || 'email@example.com'} | {personalInfo.phone || '+91 00000 00000'} | {personalInfo.address || 'City, Country'}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Professional Summary</h3>
        <p>{personalInfo.summary || 'Write a short professional summary about yourself.'}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Education</h3>
        {education.length === 0 ? (
          <p>No education added yet.</p>
        ) : (
          education.map((edu, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
            </div>
          ))
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Experience</h3>
        {experience.length === 0 ? (
          <p>No experience added yet.</p>
        ) : (
          experience.map((exp, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <strong>{exp.role}</strong> at {exp.company} ({exp.duration})
              <p>{exp.description}</p>
            </div>
          ))
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Skills</h3>
        <p>{skills.length > 0 ? skills.join(', ') : 'No skills added yet.'}</p>
      </div>

      <div style={{ marginTop: '30px', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Link to="/fill-details" style={{ padding: '10px 15px', background: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
          Edit Details
        </Link>
        <Link to="/" style={{ padding: '10px 15px', background: '#6c757d', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
          Back to Home
        </Link>
        <button onClick={handleDownloadPDF} style={{ padding: '10px 15px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px' }}>
          Download PDF
        </button>
      </div>

      {/* Success Modal */}
      <SuccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}