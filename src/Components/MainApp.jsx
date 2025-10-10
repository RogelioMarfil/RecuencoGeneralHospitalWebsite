import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import App from "../App";
import HMO from "../Pages/HMO";
import Doctors from "../Pages/Doctors";
import Careers from "../Pages/Careers";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

function MainApp() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hmo" element={<HMO />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default MainApp;