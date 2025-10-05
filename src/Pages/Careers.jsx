import React from "react";
import Footer from "../Components/Footer/Footer";
import ChatBot from '../Components/ChatBot/ChatBot'
import './Careers.css'

const Careers = () => {
  return (
    <>
        <div className="career-page">
          <div className="career-banner">
            <div className="career-banner-text">
    
            </div>
          </div>
    
          <div className="career-content">
            <h1>Careers</h1>
               <p>Explore opportunities to join our hospital team.</p>
          </div>
        </div>
        <ChatBot/>
        <Footer />
   </>
  );
};

export default Careers;