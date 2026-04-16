import React, { useState } from "react";
import "./Programs.css";

import Pic_1 from "../../../assets/Services/3.png";
import Pic_2 from "../../../assets/Services/4.png";
import Pic_3 from "../../../assets/Services/5.png";
import Pic_6 from "../../../assets/Services/6.png";
import Pic_7 from "../../../assets/Services/7.png";
import Pic_8 from "../../../assets/Services/8.png";

import Icon_1 from "../../../assets/Services_Icon/endoscope.png";
import Icon_2 from "../../../assets/Services_Icon/ultrasound.png";
import Icon_3 from "../../../assets/Services_Icon/Radiology.png";
import Icon_10 from "../../../assets/Services_Icon/10.png";
import Icon_11 from "../../../assets/Services_Icon/11.png";
import Icon_12 from "../../../assets/Services_Icon/12.png";

const programsData = [
  {
    image: Pic_1,
    icon: Icon_1,
    title: "Endoscopy & Colonoscopy",
    description:
      "Our Endoscopy & Colonoscopy Unit provides safe, accurate, and minimally invasive diagnostic procedures to examine the digestive tract and detect gastrointestinal conditions early. Using advanced endoscopic technology and expert medical care, we help diagnose ulcers, inflammation, polyps, bleeding, and other digestive concerns with comfort, precision, and patient safety as our priority.",
  },
  {
    image: Pic_2,
    icon: Icon_2,
    title: "Ultrasound & 2D Echo",
    description:
      "Our Ultrasound & 2D Echo services help provide a clearer understanding of your health through safe and dependable imaging. From checking internal organs to evaluating heart function, our team supports your doctor in planning the best care and treatment for you.",
  },
  {
    image: Pic_3,
    icon: Icon_3,
    title: "Radiology",
    description:
      "Our Diagnostic Services Department provides reliable testing to support the early detection and monitoring of various medical conditions. Using modern diagnostic equipment and performed by skilled healthcare professionals, we deliver dependable results that help physicians make informed treatment decisions with safety, efficiency, and patient-centered care.",
  },
  {
    image: Pic_6,
    icon: Icon_10,
    title: "Emergency Room",
    description:
      "Our emergency room is open 24/7, providing fast, reliable, and compassionate medical care whenever emergencies happen. As a PhilHealth OECB-ready facility, we are fully equipped to provide immediate emergency services with eligible outpatient emergency cases covered under the PhilHealth Outpatient Emergency Care Benefit package, helping patients receive prompt care with reduced financial burden.",
  },
  {
    image: Pic_7,
    icon: Icon_11,
    title: "Laboratory & Diagnostics",
    description:
      "Our Laboratory & Diagnostics services are here to help you better understand your health. Through safe and reliable testing, we support diagnosis and help your doctor choose the best care and treatment plan for your needs.",
  },
  {
    image: Pic_8,
    icon: Icon_12,
    title: "Out Patient",
    description:
      "Our Outpatient Services are here to provide convenient and compassionate medical care for your health concerns. From consultations to follow-up treatment, our team supports your wellness with quality care in a comfortable and patient-friendly setting.",
  },
];

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <>
      <div className="programs">
        {programsData.map((program, index) => (
          <div
            className="program"
            key={index}
            onClick={() => setSelectedProgram(program)}
          >
            <img src={program.image} alt={program.title} />
            <div className="caption">
              <img src={program.icon} alt="" />
              <p>{program.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProgram && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProgram.title}</h2>
            <p>{selectedProgram.description}</p>
            <button onClick={() => setSelectedProgram(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Programs;