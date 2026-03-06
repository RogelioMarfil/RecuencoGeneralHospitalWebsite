import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";
import ChatBot from "../Components/ChatBot/ChatBot";
import "./Careers.css";

const jobs = [
  { title: "Staff Nurse", department: "Nursing Department", type: "Full-time" },
  { title: "Medical Technologist", department: "Laboratory", type: "Full-time" },
  { title: "Nursing Aide", department: "Ward", type: "Full-time" },
  { title: "IT Support", department: "Information Technology", type: "Full-time" },
  { title: "Pharmacist", department: "Pharmacy Department", type: "Full-time" },
  { title: "Dietitian", department: "Dietary", type: "Full-time" },
  { title: "Kitchen Staff 'Cook'", department: "Dietary", type: "Full-time" },
  { title: "RadTech", department: "Radiology Department", type: "Full-time" },
];

const Careers = () => {
  
  const [selectedJob, setSelectedJob] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedJob(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <div className="career-page">
        <div className="career-banner"></div>
        <div className="career-wrapper">
          <div className="career-content">
            <h1>Careers</h1>
            <p>Explore opportunities to join our hospital team.</p>
              <div className="career-grid">
                {jobs.map((job, index) => (
                  <div key={index} className="career-card">
                    <h3>{job.title}</h3>
                    <p><strong>Department:</strong> {job.department}</p>
                    <p><strong>Employment Type:</strong> {job.type}</p>
                    <button className="apply-btn" onClick={() => setSelectedJob(job)}>
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          <Footer />
        </div>
        <ChatBot />
      </div>
      {selectedJob && (
        <div
          className={`modal-overlay ${isClosing ? "fade-out" : "fade-in"}`}
          onClick={handleClose}
        >
          <div
            className={`modal ${isClosing ? "zoom-out" : "zoom-in"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Apply for {selectedJob.title}</h2>
            <p>
              Department: {selectedJob.department} <br />
              Employment Type: {selectedJob.type}
            </p>
            <p>
              Please send your resume via Gmail:{" "}
              <a
                href={`https://mail.google.com/mail/?view=cm&to=recuencogenhosp.hr@gmail.com&su=Application%20for%20${encodeURIComponent(selectedJob.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#081a4b", fontWeight: "bold" }}
              >
                recuencogenhosp.hr@gmail.com
              </a>
            </p>
            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Careers;