import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";
import ChatBot from "../Components/ChatBot/ChatBot";
import "./HMO.css";

const hmoList = [
  "Maxicare",
  "Medicard",
  "Intellicare",
  "Philcare",
  "HPPI",
  "Valucare",
  "Avega",
  "Lacson & Lacson",
  "Medilink",
  "HMI",
  "Cocolife",
  "Coophealth",
  "Benlife",
  "Eastwest",
  "iCare/Inlife",
  "Sunlife GREPA",
  "Amaphil",
  "Pacific Cross",
  "Forticare",
  "Kaiser",
  "Etiqa",
  "IMS Wealth Care Inc.",
  "Generali",
  "Wellcare",
  "Carewell",
  "Medicare Plus"
];

const HMO = () => {
  const [selectedHMO, setSelectedHMO] = useState(null);

  return (
    <>
      <div className="hmo-page">
        {/* Banner */}
        <div className="hmo-banner">
          <div className="hmo-banner-text">
          </div>
        </div>

        {/* Content */}
        <div className="hmo-content">
           <h1>HMO Partners</h1>
          <div className="hmo-grid">
            {hmoList.map((hmo, idx) => (
              <div
                key={idx}
                className="hmo-card"
                onClick={() => setSelectedHMO(hmo)}
              >
                {hmo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedHMO && (
        <div className="modal-overlay" onClick={() => setSelectedHMO(null)}>
          <div
            className="modal animate-pop"
            onClick={(e) => e.stopPropagation()} // prevent closing on modal click
          >
            <h2>{selectedHMO}</h2>
            <p>Directions to {selectedHMO} office will be shown here.</p>
            <button className="close-btn" onClick={() => setSelectedHMO(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      <ChatBot />
      <Footer />
    </>
  );
};

export default HMO;