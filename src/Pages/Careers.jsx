import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";
import "./Careers.css";

const jobs = [
  { title: "Radiologic Technologist", department: "Radiology Section", type: "Full-time" },
  { title: "Kitchen Staff 'Cook'", department: "Dietary Section", type: "Full-time" },
  { title: "Medical Technologist", department: "Laboratory Section", type: "Full-time" },
  { title: "Certified Public Accountant", department: "Admin", type: "Contract" },
  { title: "Staff Nurse", department: "Nursing Section", type: "Full-time" },
  { title: "Nursing Aide", department: "Ward", type: "Full-time" },
  { title: "Midwife", department: "Ward", type: "Full-time" },
  { title: "Pharmacist", department: "Pharmacy Section", type: "Full-time" },
  { title: "Dietitian", department: "Dietary Section", type: "Full-time" },
  { title: "Bookkeeper", department: "Admin", type: "Full-time" },
  { title: "Pathologist", department: "Laboratory Section", type: "Full-time" },
  { title: "Driver", department: "N/A", type: "Full-time" }
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
                        <div className="job-info">
                          <div className="job-group">
                            <span className="label">Section</span>
                            <span className="value">{job.department}</span>
                          </div>
                          <div className="job-group">
                            <span className="label">Employment Type</span>
                            <span className="value">{job.type}</span>
                          </div>
                        </div>
                    <button className="apply-btn" onClick={() => setSelectedJob(job)}>
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          <Footer />
        </div>
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
                <strong>Section:</strong> {selectedJob.department} <br />
                <strong>Employment Type:</strong> {selectedJob.type}
              </p>
            <p>
              Please send your resume and letter of intent via Gmail by clicking the email below:{" "}
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