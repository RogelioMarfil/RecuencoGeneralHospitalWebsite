import React, { useState, useEffect } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [language, setLanguage] = useState(null);

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setLanguage(null);
      setMessages([{ sender: "bot", text: "Please choose your language / Pumili ng wika:" }]);
    }
  };

  // Handle language selection
  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    if (lang === "en") {
      addBotMessage("Hi! How can I help you today?");
    } else {
      addBotMessage("Kamusta! Paano kita matutulungan ngayon?");
    }
  };

  // Add bot message with typing effect
  const addBotMessage = (text) => {
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text }]);
      setTyping(false);
    }, 1000);
  };

  // Handle sending user input
  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    if (language === "en") {
      if (input.toLowerCase().includes("services")) {
        addBotMessage("We offer General Consultation, Emergency Care, and Laboratory services.");
      } else if (input.toLowerCase().includes("hours")) {
        addBotMessage("Our visiting hours are 8:00 AM – 8:00 PM daily.");
      } else if (input.toLowerCase().includes("location")) {
        addBotMessage("We are located at [Your Hospital Address].");
      } else {
        addBotMessage("For more info, please contact us directly at (xxx) xxx-xxxx.");
      }
    } else {
      if (input.toLowerCase().includes("serbisyo") || input.toLowerCase().includes("services")) {
        addBotMessage("Nag-aalok kami ng General Consultation, Emergency Care, at Laboratory.");
      } else if (input.toLowerCase().includes("oras") || input.toLowerCase().includes("hours")) {
        addBotMessage("Ang oras ng pagbisita ay 8:00 AM – 8:00 PM araw-araw.");
      } else if (input.toLowerCase().includes("lokasyon") || input.toLowerCase().includes("location")) {
        addBotMessage("Matatagpuan kami sa [Iyong Address Dito].");
      } else {
        addBotMessage("Para sa karagdagang impormasyon, mangyaring kontakin kami sa (xxx) xxx-xxxx.");
      }
    }
  };

  return (
    <div>
      {/* Chat Toggle Button */}
      <button className="chat-toggle" onClick={toggleChat}>
        💬
      </button>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          Hospital ChatBot
          <button onClick={toggleChat}>✖</button>
        </div>

        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}

          {typing && <div className="chat-message bot typing">Typing...</div>}

          {/* Show language buttons only if no language selected */}
          {!language && (
            <div className="language-options">
              <button onClick={() => handleLanguageSelect("en")}>English</button>
              <button onClick={() => handleLanguageSelect("tl")}>Tagalog</button>
            </div>
          )}
        </div>

        {/* Input only appears if language is selected */}
        {language && (
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={language === "en" ? "Type your message..." : "I-type ang iyong mensahe..."}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;