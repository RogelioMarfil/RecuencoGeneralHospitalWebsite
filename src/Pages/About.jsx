import React from "react";
import Footer from "../Components/Footer/Footer";
import ChatBot from '../Components/ChatBot/ChatBot'
import './About.css'

const About = () => {
  return (
<>
    <div className="about-page">
      <div className="about-banner">
        <div className="about-banner-text">

        </div>
      </div>

      <div className="about-content">
        <h1>About Us</h1>
        <p>Learn more about our hospital, mission, and values.</p>
      </div>
    </div>
    <ChatBot/>
    <Footer />
    </>
  );
};

export default About;