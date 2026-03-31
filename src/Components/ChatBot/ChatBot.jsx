import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [language, setLanguage] = useState(null);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const chatEndRef = useRef(null);

  // Scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Load saved language
  useEffect(() => {
    const savedLang = localStorage.getItem("chatbotLanguage");
    if (savedLang) setLanguage(savedLang);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      if (!language) {
        setMessages([{ sender: "bot", text: "Please choose your language / Pumili ng wika:" }]);
        setShowLanguageOptions(true);
      } else {
        setMessages([
          {
            sender: "bot",
            text:
              language === "en"
                ? "Welcome back! How can I help you today?"
                : "Muli, kamusta! Paano kita matutulungan?",
          },
          {
            sender: "bot",
            text:
              language === "en"
                ? "You can ask me about services, visiting hours, location, or contact."
                : "Maaari mong itanong ang tungkol sa serbisyo, oras ng pagbisita, lokasyon, o kontak.",
          },
        ]);
      }
    }
  };

  // ✅ When selecting a language
  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    localStorage.setItem("chatbotLanguage", lang);
    setShowLanguageOptions(false);

    if (lang === "en") {
      addBotMessage("Language set to English. Hi! How can I help you today?");
      addBotMessage("You can ask me about services, visiting hours, location, or contact.");
    } else {
      addBotMessage("Naka-set na sa Tagalog. Kamusta! Paano kita matutulungan?");
      addBotMessage("Maaari mong itanong ang tungkol sa serbisyo, oras ng pagbisita, lokasyon, o kontak.");
    }
  };

  // Typing effect
  const addBotMessage = (text) => {
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text }]);
      setTyping(false);
    }, 600);
  };

  // ✅ Handle all message logic
  const handleSend = (userText) => {
    const message = userText || input;
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: message }]);
    setInput("");
    const lowerMsg = message.toLowerCase();

    // Greet messages
    const greetings = ["hi", "hello", "good morning", "good afternoon", "good evening"];
    if (greetings.some((greet) => lowerMsg.includes(greet))) {
      if (language === "en") {
        addBotMessage("Hello! How can I assist you today?");
        addBotMessage("You can ask me about services, visiting hours, location, or contact.");
      } else {
        addBotMessage("Kamusta! Paano kita matutulungan?");
        addBotMessage("Maaari mong itanong ang tungkol sa serbisyo, oras ng pagbisita, lokasyon, o kontak.");
      }
      return;
    }

    // English logic
    if (language === "en") {
      if (lowerMsg.includes("services")) {
        addBotMessage("We offer General Consultation, Emergency Care, and Laboratory services.");
      } else if (lowerMsg.includes("hours") || lowerMsg.includes("visiting")) {
        addBotMessage("Our visiting hours are 8:00 AM – 8:00 PM daily.");
      } else if (lowerMsg.includes("location") || lowerMsg.includes("address")) {
        addBotMessage("We are located at #68 Sampaloc Extension, North Signal Village, Taguig City, 1630.");
      } else if (lowerMsg.includes("contact")) {
        addBotMessage("You can contact us directly at (xxx) xxx-xxxx.");
      } else if (lowerMsg.includes("language") || lowerMsg.includes("change language")) {
        // ✅ Instead of sending message, show language buttons
        setShowLanguageOptions(true);
        addBotMessage("Please choose your language:");
      } else {
        addBotMessage("Sorry, I can't understand. Please try asking about services, hours, location, or contact.");
      }

      // Tagalog logic
    } else if (language === "tl") {
      if (lowerMsg.includes("serbisyo") || lowerMsg.includes("services")) {
        addBotMessage("Nag-aalok kami ng General Consultation, Emergency Care, at Laboratory.");
      } else if (lowerMsg.includes("oras") || lowerMsg.includes("hours")) {
        addBotMessage("Ang oras ng pagbisita ay 8:00 AM – 8:00 PM araw-araw.");
      } else if (lowerMsg.includes("lokasyon") || lowerMsg.includes("address")) {
        addBotMessage("Matatagpuan kami sa #68 Sampaloc Extension, North Signal Village, Taguig City, 1630.");
      } else if (lowerMsg.includes("kontak") || lowerMsg.includes("contact")) {
        addBotMessage("Maaari mo kaming tawagan sa (xxx) xxx-xxxx.");
      } else if (lowerMsg.includes("wika") || lowerMsg.includes("baguhin ang wika")) {
        // ✅ Instead of sending message, show language buttons
        setShowLanguageOptions(true);
        addBotMessage("Pumili ng wika:");
      } else {
        addBotMessage("Pasensya, hindi ko maintindihan. Subukan mong itanong tungkol sa serbisyo, oras, lokasyon, o kontak.");
      }
    }
  };

  return (
    <div>
      {!isOpen && <button className="chat-toggle" onClick={toggleChat}>💬</button>}

      <div className={`chat-window ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <span>🏥 Hospital ChatBot</span>
          <button className="chat-close-btn" onClick={toggleChat}>
            <span className="close-icon">×</span>
          </button>
        </div>

        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}

          {typing && <div className="chat-message bot typing">Typing...</div>}

          {/* ✅ Language Selection UI */}
          {showLanguageOptions && (
            <div className="language-options">
              <button onClick={() => handleLanguageSelect("en")}>English</button>
              <button onClick={() => handleLanguageSelect("tl")}>Tagalog</button>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* ✅ Quick Replies */}
        {language && !showLanguageOptions && (
          <div className="quick-replies">
            <button onClick={() => handleSend(language === "en" ? "Services" : "Serbisyo")}>
              {language === "en" ? "Services" : "Serbisyo"}
            </button>
            <button onClick={() => handleSend(language === "en" ? "Visiting Hours" : "Oras ng Pagbisita")}>
              {language === "en" ? "Visiting Hours" : "Oras ng Pagbisita"}
            </button>
            <button onClick={() => handleSend(language === "en" ? "Location" : "Lokasyon")}>
              {language === "en" ? "Location" : "Lokasyon"}
            </button>
            <button onClick={() => handleSend(language === "en" ? "Contact" : "Kontak")}>
              {language === "en" ? "Contact" : "Kontak"}
            </button>
            <button
              onClick={() => {
                setShowLanguageOptions(true);
                addBotMessage(language === "en" ? "Please choose your language:" : "Pumili ng wika:");
              }}
            >
              {language === "en" ? "Change Language" : "Baguhin ang Wika"}
            </button>
          </div>
        )}

        {/* ✅ Input Box */}
        {language && !showLanguageOptions && (
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={language === "en" ? "Type your message..." : "I-type ang iyong mensahe..."}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={() => handleSend()}>➤</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;