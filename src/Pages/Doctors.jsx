import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import ChatBot from "../Components/ChatBot/ChatBot";
import "./Doctors.css";

   
  const doctors = [
  {
    name: "Angel Prodigalidad II, MD",
    specialty: "General Medicine",
    schedule: { Monday: "5PM–7PM", Tuesday: "7AM–9AM & 5PM-7PM", Wednesday: "7AM–9AM", Thursday: "5PM–7PM", Friday: "7AM–9AM & 5PM-7PM", Saturday: "7AM–9AM", Sunday: "" },
  },
  {
    name: "Mafil Calamay, MD",
    specialty: "General Medicine",
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
    specialty: "ENT-NHS",
    schedule: { Monday: "1PM–3PM", Tuesday: "", Wednesday: "3PM–4PM", Thursday: "", Friday: "3PM–4PM", Saturday: "", Sunday: "" },
  },
  {
    name: "Aubrey Ambata, MD",
    specialty: "ENT-NHS",
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
    specialty: "General Medicine",
    schedule: { Monday: "", Tuesday: "9AM–5PM", Wednesday: "9AM–12NN", Thursday: "9AM–5PM", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Irene Cabacang, MD",
    specialty: "General Medicine",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "9AM–5PM", Saturday: "", Sunday: "9AM–5PM"  },
  },
  {
    name: "Kyle Thomas Fresnido, MD",
    specialty: "General Surgeon",
    schedule: { Monday: "9AM–12NN", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "9AM–12NN", Sunday: "" },
  },
    {
    name: "Gretchen Calderon, MD",
    specialty: "Ophthalmologist",
    schedule: { Monday: "", Tuesday: "8AM–10AM", Wednesday: "", Thursday: "", Friday: "", Saturday: "4PM–6PM", Sunday: "" },
  },
    {
    name: "Romeo Basingan Jr., MD",
    specialty: "General Medicine",
    type: "Reliever",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Gren May Angeli Magsakay, MD",
    specialty: "General Medicine",
    type: "Reliever",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Angellie Nikka Abad, MD",
    specialty: "General Medicine",
    type: "Reliever",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Ann Crizette Garcia, MD",
    specialty: "IM- Pulmonologist",
    type: "Referral Doctor",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Michael Abaigar Jr., MD",
    specialty: "General Medicine",
    type: "Reliever",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  { 
    name: "William Recuenco, MD",
    specialty: "Ophthalmologist",
    type: "Appointment",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Michael Bravo, MD",
    specialty: "Ophthalmologist",
    type: "Appointment",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Rocky Perocho, MD",
    specialty: "Anesthesiology",
    type: "Appointment",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Josephine Isabelle Pre, MD",
    specialty: "Anesthesiology",
    type: "Appointment",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Jose Carlo Magsino, MD",
    specialty: "Anesthesiology",
    type: "Appointment",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Guillen Segador, MD",
    specialty: "Anesthesiology",
    type: "Appointment",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Paola Muharrani, MD",
    specialty: "OB-GYN",
    type: "Referral Doctor",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Raymund Quiambao, MD",
    specialty: "Orthopaedic Surgeon",
    type: "Referral Doctor",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
  {
    name: "Maria May Castell, MD",
    specialty: "OB-GYN",
    type: "Referral Doctor",
    schedule: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  },
];
 const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


const Doctors = () => {

  const [selectedDoctor,setSelectedDoctor] = useState(null);
  const [dailyScheduleVisible,setDailyScheduleVisible] = useState(false);
  const [closingDaily,setClosingDaily] = useState(false);
  const [closingDoctor,setClosingDoctor] = useState(false);

  /* auto refresh every minute */
  const [refresh,setRefresh] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setRefresh(Date.now());
    },60000);

    return ()=>clearInterval(interval);
  },[]);

  useEffect(()=>{
    const lastShown = localStorage.getItem("dailyScheduleShown");
    const today = new Date().toDateString();

    if(lastShown !== today){
      setDailyScheduleVisible(true);
      localStorage.setItem("dailyScheduleShown",today);
    }
  },[]);

  const getTodayKey = () => {
    const todayIndex = new Date().getDay();
    return days[(todayIndex + 6) % 7];
  };

  const todayKey = getTodayKey();

  const parseTime = (timeStr) => {

    if(!timeStr || timeStr.trim() === "") return Infinity;

    const firstSegment = timeStr.split("&")[0].trim();
    const parts = firstSegment.split(/-|–|—/);

    const start = parts[0].trim();

    let hour = parseInt(start.match(/\d+/)[0]);

    if(/PM/i.test(start) && hour !== 12) hour += 12;
    if(/AM/i.test(start) && hour === 12) hour = 0;

    return hour;
  };

  /* AVAILABLE NOW FUNCTION */

  const isDoctorAvailableNow = (timeRange) => {

    if (!timeRange || timeRange.trim() === "") return false;

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const firstSegment = timeRange.split("&")[0].trim();
    const parts = firstSegment.split(/-|–|—/);

    if(parts.length !== 2) return false;

    const start = parts[0].trim();
    const end = parts[1].trim();

    const convertToMinutes = (time) => {

      if(time.includes("12NN")) return 12*60;

      const match = time.match(/\d+/);
      if(!match) return 0;

      let hour = parseInt(match[0]);

      if(/PM/i.test(time) && hour !== 12) hour += 12;
      if(/AM/i.test(time) && hour === 12) hour = 0;

      return hour*60;
    };

    const startMin = convertToMinutes(start);
    const endMin = convertToMinutes(end);

    return currentMinutes >= startMin && currentMinutes <= endMin;
  };

  const doctorsToday = doctors
    .filter(doc => doc.schedule[todayKey] && doc.schedule[todayKey].trim() !== "")
    .sort((a,b)=> parseTime(a.schedule[todayKey]) - parseTime(b.schedule[todayKey]));

  return(

  <div className="page-wrapper">

    <div className="doctor-page">

      <div className="doctor-banner"></div>

      <div className="doctor-content">

        <h1>Our Doctors</h1>
        <p>Meet our team of expert doctors ready to serve you.</p>

        <button
          className="close-btn"
          style={{marginTop:"15px",fontSize:"18px"}}
          onClick={()=>setDailyScheduleVisible(true)}
        >
          View the doctors schedule today
        </button>

        <div className="doctor-grid">

          {doctors.map((doc,index)=>{

            const availableNow = isDoctorAvailableNow(doc.schedule[todayKey]);

            return(

              <div
                key={index}
                className="doctor-card"
                onClick={()=>setSelectedDoctor(doc)}
              >

                {availableNow && (
                  <div className="available-status">
                    <span className="available-dot"></span>
                    <span className="available-text">Available Now</span>
                  </div>
                )}

                <h3>{doc.name}</h3>
                <p>{doc.specialty}</p>

                <span className="view-text">View Schedule</span>

              </div>
            );
          })}

        </div>

      </div>

    </div>

{/* DAILY SCHEDULE MODAL */}

{dailyScheduleVisible && (

<div
className={`modal-overlay ${closingDaily ? "closing" : ""}`}
onClick={()=>{

setClosingDaily(true);

setTimeout(()=>{

setDailyScheduleVisible(false);
setClosingDaily(false);

},400);

}}
>

<div className="modal schedule-modal" onClick={(e)=>e.stopPropagation()}>

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

{doctorsToday.map((doc,index)=>(

<tr key={index}>
<td>{doc.name}</td>
<td>{doc.specialty}</td>
<td>{doc.schedule[todayKey]}</td>
</tr>

))}

</tbody>

</table>

):( <p>No doctors available today.</p> )}

<button
className="close-btn"
onClick={()=>setDailyScheduleVisible(false)}
>
Close
</button>

</div>
</div>

)}

{/* DOCTOR MODAL */}

{selectedDoctor && (

<div
className={`modal-overlay ${closingDoctor ? "closing" : ""}`}
onClick={()=>{

setClosingDoctor(true);

setTimeout(()=>{

setSelectedDoctor(null);
setClosingDoctor(false);

},400);

}}
>

<div className="modal schedule-modal" onClick={(e)=>e.stopPropagation()}>

<h2>{selectedDoctor.name}</h2>
<p>{selectedDoctor.specialty}</p>

{Object.values(selectedDoctor.schedule).some(time=>time && time.trim() !== "") ? (

<table className="schedule-table">

<thead>
<tr>

{days
.filter(d => selectedDoctor.schedule[d] && selectedDoctor.schedule[d].trim() !== "")
.map(d => (

<th key={d}>

<span className="desktop-day">{d}</span>

<span className="mobile-day">
{d === "Monday" && "Mon"}
{d === "Tuesday" && "Tue"}
{d === "Wednesday" && "Wed"}
{d === "Thursday" && "Thu"}
{d === "Friday" && "Fri"}
{d === "Saturday" && "Sat"}
{d === "Sunday" && "Sun"}
</span>

</th>

))}

</tr>
</thead>

<tbody>

<tr>

{days
.filter(d => selectedDoctor.schedule[d] && selectedDoctor.schedule[d].trim() !== "")
.map(d => (

<td key={d}>{selectedDoctor.schedule[d]}</td>

))}

</tr>

</tbody>

</table>

):( <div className="no-schedule-box">
<h3 className="doctor-type">{selectedDoctor.type}</h3>
</div>)}

<button
className="close-btn"
onClick={()=>{

setClosingDoctor(true);

setTimeout(()=>{

setSelectedDoctor(null);
setClosingDoctor(false);

},400);

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