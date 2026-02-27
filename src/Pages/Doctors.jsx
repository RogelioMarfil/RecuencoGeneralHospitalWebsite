import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import ChatBot from "../Components/ChatBot/ChatBot";
import "./Doctors.css";

   
  const doctors = [
  {
    name: "Angel Prodigalidad II, MD",
    specialty: "General Practitioner",
    schedule: { Monday: "5PM–7PM", Tuesday: "7AM–9AM & 5PM-7PM", Wednesday: "7AM–9AM", Thursday: "5PM–7PM", Friday: "7AM–9AM & 5PM-7PM", Saturday: "7AM–9AM", Sunday: "" },
  },
  {
    name: "Mafil Calamay, MD",
    specialty: "General Practitioner",
    schedule: { Monday: "7AM–9AM", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "12NN-7PM" },
  },
  {
    name: "Cristina Malinao, MD",
    specialty: "Internal Medicine",
    schedule: { Monday: "8AM-9AM", Tuesday: "9AM–12NN", Wednesday: "1PM–4PM", Thursday: "9AM-12NN", Friday: "", Saturday: "8AM–12NN", Sunday: "" },
  },
  {
    name: "Joel Santos, MD",
    specialty: "Internal Medicine - Cardio",
    schedule: { Monday: "2PM–4PM", Tuesday: "2PM–4PM", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Mar Joseph Florentino, MD",
    specialty: "General Surgeon",
    schedule: { Monday: "", Tuesday: "", Wednesday: "10AM–12NN", Thursday: "", Friday: "", Saturday: "4PM-5PM", Sunday: "" },
  },
  {
    name: "Evelyn Recuenco, MD",
    specialty: "Pediatrician",
    schedule: { Monday: "", Tuesday: "3PM-5PM", Wednesday: "", Thursday: "3PM-5PM", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Maria Sheila Serrano, MD",
    specialty: "Pediatrician",
    schedule: { Monday: "10AM–3PM", Tuesday: "10AM-1PM", Wednesday: "9AM–12PM", Thursday: "", Friday: "10AM–4PM", Saturday: "", Sunday: "" },
  },
  {
    name: "Raquel Medel, MD",
    specialty: "Pediatrician",
    schedule: { Monday: "", Tuesday: "", Wednesday: "10AM–4PM", Thursday: "10AM–2PM", Friday: "", Saturday: "10AM–4PM", Sunday: "" },
  },
    {
    name: "Phoebe Ann Santos, MD",
    specialty: "Pediatrician-Nephrologist",
    schedule: { Monday: "", Tuesday: "", Wednesday: "5PM-6:30 PM", Thursday: "", Friday: "", Saturday: "5PM-6:30 PM", Sunday: "" },
  },
    {
    name: "Jennifer Rodriguez, MD",
    specialty: "Internal Medicine - Cardio",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "12NN–2PM", Saturday: "", Sunday: "" },
  },
  {
    name: "Ma. Helen 'Sweet' Perez-Florentino, MD",
    specialty: "Aesthetic Dermatology / Lifestyle Medicine Specialist",
    schedule: { Monday: "", Tuesday: "", Wednesday: "10AM–12NN", Thursday: "", Friday: "", Saturday: "4PM-6PM", Sunday: "" },
  },
      {
    name: "Anna Melisa Ng, MD",
    specialty: "Internal Medicine-Gastroenterology Digestive Endoscopy and ERCP'",
    schedule: { Monday: "", Tuesday: "", Wednesday: "12NN-1PM", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Renante Del Valle, MD",
    specialty: "ENT",
    schedule: { Monday: "1PM–3PM", Tuesday: "", Wednesday: "3PM–4PM", Thursday: "", Friday: "3PM–4PM", Saturday: "", Sunday: "" },
  },
  {
    name: "Aubrey Ambata, MD",
    specialty: "ENT",
    schedule: { Monday: "", Tuesday: "2PM–3PM", Wednesday: "", Thursday: "2PM–3PM", Friday: "", Saturday: "2PM–3PM", Sunday: "2PM–3PM" },
  },
  {
    name: "Rosario Carreon, MD",
    specialty: "OB-GYN",
    schedule: { Monday: "", Tuesday: "", Wednesday: "2PM–7PM", Thursday: "7AM—9AM", Friday: "", Saturday: "2PM–7PM", Sunday: "7AM—9AM" },
  },
  {
    name: "Princess Jehan Linog, MD",
    specialty: "OB-GYN",
    schedule: { Monday: "9AM—11AM", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Andrie Lorenzo Ortega, MD",
    specialty: "Orthopaedics",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "3PM—5PM", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "John Collins De Castro, MD",
    specialty: "General Practitioner",
    schedule: { Monday: "", Tuesday: "9AM–5PM", Wednesday: "9AM–12NN", Thursday: "9AM–5PM", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Irene Cabacang, MD",
    specialty: "General Practitioner",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "9AM–5PM", Saturday: "", Sunday: "9AM–5PM"  },
  },
  {
    name: "Kyle Thomas Fresnido, MD",
    specialty: "General Surgeon",
    schedule: { Monday: "9AM–12NN", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "9AM–12NN", Sunday: "" },
  },
    {
    name: "Gretchen Calderon, MD",
    specialty: "Opthalmologist",
    schedule: { Monday: "", Tuesday: "8AM–10AM", Wednesday: "", Thursday: "", Friday: "", Saturday: "4PM–6PM", Sunday: "" },
  },
    {
    name: "Romeo Basingan Jr., MD",
    specialty: "General Practitioner",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Gren May Angeli Magsakay, MD",
    specialty: "General Practitioner",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Angellie Nikka Abad ,MD",
    specialty: "General Practitioner",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Angellie Nikka Abad ,MD",
    specialty: "General Practitioner",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Angellie Nikka Abad ,MD",
    specialty: "General Practitioner",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
];

 const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [dailyScheduleVisible, setDailyScheduleVisible] = useState(false);
  const [closingDaily, setClosingDaily] = useState(false);
  const [closingDoctor, setClosingDoctor] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("dailyScheduleShown");
    const today = new Date().toDateString();
    if (lastShown !== today) {
      setDailyScheduleVisible(true);
      localStorage.setItem("dailyScheduleShown", today);
    }
  }, []);

  const getTodayKey = () => {
    const todayIndex = new Date().getDay();
    return days[(todayIndex + 6) % 7]; 
  };

  const todayKey = getTodayKey();


  const parseTime = (timeStr) => {
    if (!timeStr || timeStr.trim() === "") return Infinity;
    const firstSegment = timeStr.split("&")[0].trim(); 
    const [start] = firstSegment.split("–").map(t => t.trim());
    let hour = parseInt(start.match(/\d+/)[0]);
    if (/PM/i.test(start) && hour !== 12) hour += 12;
    if (/AM/i.test(start) && hour === 12) hour = 0;
    return hour;
  };


  const doctorsToday = doctors
    .filter(doc => doc.schedule[todayKey] && doc.schedule[todayKey].trim() !== "" && doc.schedule[todayKey] !== "—" && doc.schedule[todayKey] !== "-")
    .sort((a, b) => parseTime(a.schedule[todayKey]) - parseTime(b.schedule[todayKey]));

  return (
    <div className="page-wrapper">
      <div className="doctor-page">
        <div className="doctor-banner"></div>

        <div className="doctor-content">
          <h1>Our Doctors</h1>
          <p>Meet our team of expert doctors ready to serve you.</p>
          <button
            className="close-btn"
            style={{ marginTop: "15px", fontSize: "18px" }}
            onClick={() => setDailyScheduleVisible(true)}
          >
            View the doctors schedule today
          </button>

          <div className="doctor-grid">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="doctor-card"
                onClick={() => setSelectedDoctor(doc)}
              >
                <h3>{doc.name}</h3>
                <p>{doc.specialty}</p>
                <span className="view-text">View Schedule</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {dailyScheduleVisible && (
        <div
          className={`modal-overlay ${closingDaily ? "closing" : ""}`}
          onClick={() => {
            setClosingDaily(true);
            setTimeout(() => {
              setDailyScheduleVisible(false);
              setClosingDaily(false);
            }, 400);
          }}
        >
          <div
            className={`modal schedule-modal ${closingDaily ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Doctors Schedule Today ({todayKey})</h2>

            {doctorsToday.length > 0 ? (
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Doctor</th>
                    <th>Specialty</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {doctorsToday.map((doc, index) => (
                    <tr key={index}>
                      <td>{doc.name}</td>
                      <td>{doc.specialty}</td>
                      <td>{doc.schedule[todayKey]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No doctors available today.</p>
            )}

            <button
              className="close-btn"
              onClick={() => {
                setClosingDaily(true);
                setTimeout(() => {
                  setDailyScheduleVisible(false);
                  setClosingDaily(false);
                }, 400);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {selectedDoctor && (
        <div
          className={`modal-overlay ${closingDoctor ? "closing" : ""}`}
          onClick={() => {
            setClosingDoctor(true);
            setTimeout(() => {
              setSelectedDoctor(null);
              setClosingDoctor(false);
            }, 400);
          }}
        >
          <div
            className={`modal schedule-modal ${closingDoctor ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedDoctor.name}</h2>
            <p>{selectedDoctor.specialty}</p>
              {Object.values(selectedDoctor.schedule).some((time) => time && time.trim() !== "") ? (
                <table className="schedule-table">
                  <thead>
                    <tr>
                      {days
                        .filter((d) => selectedDoctor.schedule[d] && selectedDoctor.schedule[d].trim() !== "")
                        .map((d) => (
                          <th key={d}>{d}</th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {days
                        .filter((d) => selectedDoctor.schedule[d] && selectedDoctor.schedule[d].trim() !== "")
                        .map((d) => (
                          <td key={d}>{selectedDoctor.schedule[d]}</td>
                        ))}
                    </tr>
                  </tbody>
                </table>
              ) : (
                <p style={{ fontWeight: "bold", marginTop: "20px", fontSize: "30px" }}>
                  "Reliever or Oncall"
                </p>
              )}
            <button
              className="close-btn"
              onClick={() => {
                setClosingDoctor(true);
                setTimeout(() => {
                  setSelectedDoctor(null);
                  setClosingDoctor(false);
                }, 400);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <ChatBot />
      <Footer />
    </div>
  );
};

export default Doctors;