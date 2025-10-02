import React from "react";
import Footer from "../Components/Footer/Footer";
import ChatBot from '../Components/ChatBot/ChatBot'
import "./HMO.css";

const HMO = () => {
  return (
    <>
    <div className="hmo-page">
      <div className="hmo-banner">
        <div className="hmo-banner-text">

        </div>
      </div>

      <div className="hmo-content">
        <h1>HMO Partners</h1>
          <p>We accept different HMO providers here at our hospital.</p>
      </div>
    </div>
    <ChatBot/>
    <Footer />
    </>
  );
};

export default HMO;