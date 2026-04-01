import React from "react";
import Footer from "../Components/Footer/Footer";
import "./About.css";
import orgChart from "../assets/org.png";
import hmoImg from "../assets/HMO.jpg";
import recordsImg from "../assets/Clean_Records.png";
import labImg from "../assets/Clean_Lab.jpg";
import pharmacyImg from "../assets/Clean_Pharmacy.jpg";
import cashierImg from "../assets/Clean_Cashier.jpg";
import triageImg from "../assets/Triage_Clean.jpg";
import dietaryImg from "../assets/Dietary.jpg";
import admittingImg from "../assets/billing.jpeg";
import hrImg from "../assets/HR_Office.jpeg";
import opdImg from "../assets/Clean_OPD.png";
import radImg from "../assets/Clean_Radiology.jpg";
import EchoImg from "../assets/2D_Echo.jpg";
import DTestingImg from "../assets/DrugTesting_Department.jpg";
import NurseWardImg from "../assets/Clean_Nurse_Ward.png";
import PhilHealthImg from "../assets/Philhealth_Section.jpg";
import ERImg from "../assets/ER-BALANCED.jpg";




const AboutUs = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-banner">
          <div className="about-banner-text"></div>
        </div>

        <div className="about-content">
          <div className="about-sections">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To provide immediate efficient and quality
                healthcare service to the immediate constituents 
                and nearby areas.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                To be competitively comparable in providing efficient,
                adequate, affordable and quality healthcare services.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Values</h3>
              <p>
                Compassion, Professionalism, Integrity, Teamwork, and Commitment
                to continuous improvement.
              </p>
            </div>

            <div className="about-card">
              <h3>Why Choose Us</h3>
              <p>
                Experienced doctors, reliable services, and a
                patient-focused approach you can trust.
              </p>
            </div>

            <div className="about-organization">
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
                    <span>Laboratory Section</span>
                  </div>

                  <div className="department-card">
                    <img src={pharmacyImg} alt="Pharmacy" />
                    <span>Pharmacy Section</span>
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
                  <div className="department-card">
                    <img src={hrImg} alt="Human Resource Section" />
                    <span>Human Resource Section</span>
                  </div>
                  <div className="department-card">
                    <img src={opdImg} alt="OPD Section" />
                    <span>OPD Section</span>
                  </div>
                  <div className="department-card">
                    <img src={radImg} alt="Radiology Section" />
                    <span>Radiology Section</span>
                  </div>
                    <div className="department-card">
                    <img src={EchoImg} alt="2D Echo Section" />
                    <span>2D Echo Section</span>
                  </div>
                  <div className="department-card">
                    <img src={DTestingImg} alt="Drug Testing Laboratory" />
                    <span>Drug Testing Laboratory</span>
                  </div>
                  <div className="department-card">
                    <img src={NurseWardImg} alt="Nurse Ward Section" />
                    <span>Nurse Ward Section</span>
                  </div>
                  <div className="department-card">
                    <img src={PhilHealthImg} alt="PhilHealth Section" />
                    <span>PhilHealth Section</span>
                  </div>
                  <div className="department-card">
                    <img src={ERImg} alt="Emergency Room" />
                    <span>Emergency Room</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;