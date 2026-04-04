import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "../App";
import NewsUpdate from "../Pages/NewsUpdate";
import HMO from "../Pages/HMO";
import Doctors from "../Pages/Doctors";
import Careers from "../Pages/Careers";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

function MainApp() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsupdate" element={<NewsUpdate />} />
        <Route path="/hmo" element={<HMO />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default MainApp;