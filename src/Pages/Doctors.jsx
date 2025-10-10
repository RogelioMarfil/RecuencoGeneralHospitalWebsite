import React from "react"
import Footer from "../Components/Footer/Footer";
import ChatBot from '../Components/ChatBot/ChatBot';
import Footer from "../Components/Footer/Footer"
import ChatBot from '../Components/ChatBot/ChatBot'
import'./Doctors.css'

const Doctors = () => {
  return (
     <>
    <div className="doctor-page">
      <div className="doctor-banner">
        <div className="doctor-banner-text">

        </div>
      </div>

      <div className="doctor-content">
        <h1>Our Doctors</h1>
        <p>Meet our team of expert doctors ready to serve you.</p>
      </div>
    </div>
    <ChatBot/>
    <Footer />
    </>
  );
};

export default Doctors;