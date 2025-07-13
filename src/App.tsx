import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Certificates } from './pages/Certificates';
import { Awards } from './pages/Awards';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { CertificateProvider } from './context/CertificateContext';

function App() {
  return (
    <CertificateProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </div>
      </Router>
    </CertificateProvider>
  );
}

export default App;
