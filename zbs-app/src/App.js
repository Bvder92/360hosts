import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Departements from "./Components/Departements";
import ContactForm from "./Components/ContactForm";
import Pricing from "./Components/Pricing"; // Import de la page Pricing
import { Home } from "./Components/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/selection-region" element={<SelectionRegion />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/department" element={<Departements />} />
        <Route path="/contact/:region/:department" element={<ContactForm />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
