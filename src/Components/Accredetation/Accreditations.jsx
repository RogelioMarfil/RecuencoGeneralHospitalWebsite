import React from "react";
import "./Accreditations.css";
import logo1 from "../../assets/Accreditation/DOH_LOGO.png";
import logo2 from "../../assets/Accreditation/PHILIPPINES_LOGO.png";
import logo3 from "../../assets/Accreditation/PRIVATE_LOGO.png";
import logo4 from "../../assets/Accreditation/YAKAP.png";
import logo5 from "../../assets/Accreditation/PHILHEALTH_LOGO.png";

const Accreditations = () => {
  return (
    <section className="accreditations">
      <h2 className="accreditation-title">
        License, Membership & Accreditation
      </h2>

      <div className="logo-container">

        <div className="logo-row">
          <img src={logo1} alt="Accreditation 1" />
          <img src={logo2} alt="Accreditation 2" />
          <img src={logo3} alt="Accreditation 3" />
        </div>

        <div className="logo-row bottom-row">
          <a href="https://www.philhealth.gov.ph/yakap/" target="_blank" rel="noopener noreferrer">
            <img src={logo4} alt="Accreditation 4" />
          </a>

          <a href="https://www.philhealth.gov.ph/" target="_blank" rel="noopener noreferrer">
            <img src={logo5} alt="Accreditation 5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Accreditations;