import React from 'react'
import Footer from "../Components/Footer/Footer";
import ChatBot from '../Components/ChatBot/ChatBot'
import './NewsUpdate.css'

const NewsUpdate = () => {
  return (
    <>
    <div className="newsupdate-page">
      <div className="newsupdate-banner">
        <div className="newsupdate-banner-text">
        </div>
      </div>
      <div className="newsupdate-content">
        <h1>News and Updates</h1>
        <p>Reach out to us for inquiries, appointments, or support.</p>

        
      </div>
    </div>
    <ChatBot/>
    <Footer/>
    </>
  )
}

export default NewsUpdate