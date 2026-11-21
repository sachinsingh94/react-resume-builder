import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DetailsFilling from './pages/DetailsFilling';
import Preview from './pages/Preview';
import AboutUs from './pages/AboutUs';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fill-details" element={<DetailsFilling />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}