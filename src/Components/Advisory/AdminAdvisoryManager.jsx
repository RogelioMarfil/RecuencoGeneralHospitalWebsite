import React, { useEffect, useState } from "react";
import "./AdminAdvisoryManager.css";

function AdminAdvisoryManager() {

  const [showPopup, setShowPopup] = useState(false);
  const [advisory, setAdvisory] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/advisory")
      .then(res => res.json())
      .then(data => {
        if (data.message && data.message.trim() !== "") {
          setAdvisory(data.message);

          const today = new Date().toDateString();
          const seen = localStorage.getItem("advisory_seen");
          const lastAdvisory = localStorage.getItem("last_advisory") || "";
          if (seen !== today || lastAdvisory !== data.message) {
            setShowPopup(true);
            localStorage.setItem("advisory_seen", today);
            localStorage.setItem("last_advisory", data.message);
          }
        }
      })
      .catch(err => {
        console.error("Error fetching advisory:", err);
      });
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="advisory-overlay">
      <div className="advisory-popup">
        <h2>Hospital Advisory</h2>
        <p>{advisory}</p>
        <button className="close-btn" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
}

export default AdminAdvisoryManager;