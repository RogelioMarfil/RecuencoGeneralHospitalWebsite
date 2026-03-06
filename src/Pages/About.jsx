import React from "react";
import Footer from "../Components/Footer/Footer";
import ChatBot from "../Components/ChatBot/ChatBot";
import "./About.css";
import orgChart from "../assets/org.png";
import hmoImg from "../assets/HMO.jpg";
import recordsImg from "../assets/Records.jpeg";
import labImg from "../assets/Laboratory.jpg";
import pharmacyImg from "../assets/Pharmacy.jpg";
import cashierImg from "../assets/cashier.jpeg";
import triageImg from "../assets/8.png";
import dietaryImg from "../assets/Dietary.jpg";
import admittingImg from "../assets/billing.jpeg";

const AboutUs = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-banner">
          <div className="about-banner-text"></div>
        </div>

        <div className="about-content">
          <h1>About Us</h1>

          <div className="about-sections">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To provide immediate efficient and quiality
                healthcare service to the immediate constituents 
                and nearby areas.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                To be Competitively comparable in providing efficient,
                adequate, affordable and quality healthcare servicess.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Values</h3>
              <p>
                Compassion, professionalism, integrity, teamwork, and commitment
                to continuous improvement.
              </p>
            </div>

            <div className="about-card">
              <h3>Why Choose Us</h3>
              <p>
                Experienced doctors, modern equipment, reliable services, and a
                patient-focused approach you can trust.
              </p>
            </div>

            <div className="about-organization">
              <h3>Organizational Chart</h3>
              <div className="organization-container">
                <img
                  src={orgChart}
                  alt="Hospital Organizational Chart"
                  className="organization-image"
                />
              </div>
              <div className="about-content">
                <h1>Departments/Sections</h1>
                <div className="departments-container">
                  <div className="department-card">
                    <img src={hmoImg} alt="HMO Department" />
                    <span>HMO Section</span>
                  </div>

                  <div className="department-card">
                    <img src={recordsImg} alt="Records Department" />
                    <span>Records Section</span>
                  </div>

                  <div className="department-card">
                    <img src={labImg} alt="Laboratory" />
                    <span>Laboratory </span>
                  </div>

                  <div className="department-card">
                    <img src={pharmacyImg} alt="Pharmacy" />
                    <span>Pharmacy</span>
                  </div>
                  <div className="department-card">
                    <img src={cashierImg} alt="Cashier" />
                    <span>Cashier Section</span>
                  </div>
                  <div className="department-card">
                    <img src={dietaryImg} alt="Dietary" />
                    <span>Dietary Section</span>
                  </div>
                  <div className="department-card">
                    <img src={triageImg} alt="Traige Area" />
                    <span>Triage Area</span>
                  </div>
                  <div className="department-card">
                    <img src={admittingImg} alt="Admitting Section" />
                    <span>Admitting Section</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ChatBot />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
