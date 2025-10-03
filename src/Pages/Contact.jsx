import React from "react";
import Footer from "../Components/Footer/Footer";
import ChatBot from '../Components/ChatBot/ChatBot'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <div className="contact-page">
      <div className="contact-banner">
        <div className="contact-banner-text">

        </div>
      </div>

      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Reach out to us for inquiries, appointments, or support.</p>
      </div>
    </div>
    <ChatBot/>
    <Footer />
    </>
  );
};

export default Contact;