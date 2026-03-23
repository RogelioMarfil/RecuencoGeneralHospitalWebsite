import React from "react";
import "./Accreditations.css";
import logo1 from "../../assets/DOH_LOGO.png";
import logo2 from "../../assets/PHILIPPINES_LOGO.png";
import logo3 from "../../assets/PRIVATE_LOGO.png";
import logo4 from "../../assets/YAKAP.png";
import logo5 from "../../assets/PHILHEALTH_LOGO.png";

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
    <img src={logo4} alt="Accreditation 4" />
    <img src={logo5} alt="Accreditation 5" />
  </div>

</div>
    </section>
  );
};

export default Accreditations;