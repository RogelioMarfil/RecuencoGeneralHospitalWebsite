import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const chatEndRef = useRef(null);

  // Scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    let reply = "";

    // Bot replies based on keywords
    if (userMessage.toLowerCase().includes("service")) {
      reply = "We offer General Consultation, Emergency Care, Laboratory, and more.";
    } else if (userMessage.toLowerCase().includes("hour"),("time")) {
      reply = "Our visiting hours are 7:00 AM – 7:00 PM daily.";
    } else if (userMessage.toLowerCase().includes("location") || userMessage.toLowerCase().includes("where")) {
      reply = "We are located at 68 Sampaloc Extension, North Signal Village, Taguig City, 1630.";
    } else if (userMessage.toLowerCase().includes("other")) {
      reply = "For more info, please contact us directly at (123) 456-7890 or email info@hospital.com.";
    } else {
      reply = "Sorry, I didn’t understand that. Please try asking about services, hours, or location.";
    }

    setMessages((prev) => [
      ...prev,
      { from: "user", text: userMessage },
      { from: "bot", text: reply },
    ]);

    setInput(""); // clear input
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div>
      {/* Floating button */}
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Hospital Assistant</span>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.from === "bot" ? "bot" : "user"}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;