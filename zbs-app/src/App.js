import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Features from './Components/Features';
import WhyChoose from './Components/WhyChoose';
import Footer from './Components/Footer';
import SelectionRegion from './Components/SelectionRegion';
import Departements from './Components/Departements';
import ContactForm from './Components/ContactForm';
import Pricing from './Components/Pricing'; // Import de la page Pricing

function App() {
  const [showSelectionRegion, setShowSelectionRegion] = useState(false);

  // Fonction pour activer la sélection de région
  const handleShowSelectionRegion = () => {
    setShowSelectionRegion(true);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {showSelectionRegion ? (
          <>
            <Route path="/selection-region" element={<SelectionRegion />} />
            <Route path="/departements/:region" element={<Departements />} />
            <Route path="/contact/:region/:departement" element={<ContactForm />} />
            <Route path="*" element={<Navigate to="/selection-region" replace />} />
          </>
        ) : (
          <>
            <Route
              path="/"
              element={
                <>
                  <Header onJoinClick={handleShowSelectionRegion} />
                  <About />
                  <Features />
                  <WhyChoose />
                  <Footer />
                </>
              }
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
