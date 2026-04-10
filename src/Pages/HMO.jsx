import React, { useState, useRef, useEffect } from "react";
import Footer from "../Components/Footer/Footer";;
import "./HMO.css";
import maxicareImg from "../assets/HMO/Maxicare.png";
import medicardImg from "../assets/HMO/Medicard.png";
import interllicareImg from "../assets/HMO/intellecare.png";
import philcareImg from "../assets/HMO/philcare.png";
import HPPIImg from "../assets/HMO/HPPI.png";
import valucareImg from "../assets/HMO/Valucare.png";
import avegaImg from "../assets/HMO/avega.png";
import lacsonImg from "../assets/HMO/lacson.png";
import MediImg from "../assets/HMO/Medilink.png";
import HMIImg from "../assets/HMO/HMI.png";
import cocoImg from "../assets/HMO/COCOLIFE.png";
import coopImg from "../assets/HMO/coop.png";
import benImg from "../assets/HMO/benlife.png";
import EWImg from "../assets/HMO/eastwest.png";
import icareImg from "../assets/HMO/icare.png";
import sunImg from "../assets/HMO/sunlife.png";
import amphilImg from "../assets/HMO/amphil.png";
import pacificImg from "../assets/HMO/pacific.png";
import forteImg from "../assets/HMO/forte.png";
import kaiserImg from "../assets/HMO/kaiser.png";
import etiqaImg from "../assets/HMO/etiqa.png";
import imsImg from "../assets/HMO/ims.png";
import generaliImg from "../assets/HMO/generali.png";
import wellcareImg from "../assets/HMO/wellcare.png";
import carewellImg from "../assets/HMO/carewell.png"; 
import medicareImg from "../assets/HMO/medicare.png";
import medocareImg from "../assets/HMO/medocare.png";

const doctorSpecialties = {
  "William Recuenco, MD": "Ophthalmologist",
  "Evelyn Recuenco, MD": "Pediatrician",
  "Cristina Malinao, MD": "Internal Medicine",
  "Joel Santos, MD": "Internal Medicine - Cardiologist",
  "Jennifer Rodriguez, MD": "Internal Medicine - Cardiologist",
  "Rosario Carreon, MD": "OB-GYNE",
  "Maria Sheila Serrano, MD": "Pediatrician",
  "Phoebe Anne Santos, MD": "Pediatric-Nephrology",
  "Mar Joseph Florentino, MD": "General & Cosmetic Surgeon",
  "Gretchen Calderon, MD": "Ophthalmologist",
  "Rocky Perocho, MD": "Anesthesiologist",
  "Michael Bravo, MD": "Ophthalmologist",
  "Angel Prodigalidad II, MD": "General Medicine",
  "Josephine Isabelle Pre, MD": "Anesthesiologist",
  "Renante Del Valle, MD": "ENT-HNS",
  "Andrie Lorenzo Ortega, MD": "Orthopaedic Surgeon",
  "Raymond Quiambao, MD": "Orthopaedic Surgeon",
  "Princess Jeehan Linog, MD": "OB-GYNE",
  "Guillen Segador, MD": "Anesthesiologist",
  "Raquel Medel, MD": "Pediatrician",
  "Jose Magsino, MD": "Anesthesiologist",
  "Mafil Calamay, MD": "General Medicine",
  "John Collins De Castro, MD": "General Medicine",
  "Irene Cabacang, MD": "General Medicine",
  "Ma. Helen Perez-Florentino, MD": "Aesthetic Dermatology / Lifestyle Medicine Specialist",
  "Anna Melisa Ng, MD" : "Internal Medicine-Gastroenterology Digestive Endoscopy and ERCP",
  "Romeo Basingan Jr., MD" : "General Medicine",
  "Kyle Thomas Fresnido, MD" : "General Surgeon",
  "Aubrey Ambata, MD" : "ENT-HNS"
};

const hmoList = [
  { id: "Maxicare", logo: maxicareImg, doctors: ["William Recuenco, MD","Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD", 
    "Angel Prodigalidad II, MD","Josephine Isabelle Pre, MD", "Renante Del Valle, MD","Andrie Lorenzo Ortega, MD","Raymond Quiambao, MD","Princess Jeehan Linog, MD",
    "Guillen Segador, MD"] },
  { id: "Medicard", logo: medicardImg, doctors: ["William Recuenco, MD", "Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD","Mafil Calamay, MD",
    "Angel Prodigalidad II, MD","Jose Magsino, MD", "Renante Del Valle, MD","Andrie Lorenzo Ortega, MD","Raymond Quiambao, MD","Kyle Thomas Fresnido, MD","Princess Jeehan Linog, MD",
    "Guillen Segador, MD"] },
  { id: "Intellicare", logo: interllicareImg, doctors: ["William Recuenco, MD", "Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD","Raquel Medel, MD",
    "Josephine Isabelle Pre, MD","Jose Magsino, MD", "Renante Del Valle, MD","Andrie Lorenzo Ortega, MD","Raymond Quiambao, MD","Princess Jeehan Linog, MD", "Guillen Segador, MD"] },
  { id: "Philcare", logo: philcareImg, doctors: ["William Recuenco, MD","Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD", 
    "Angel Prodigalidad II, MD","Raquel Medel, MD", "Jose Magsino, MD","Renante Del Valle, MD","Andrie Lorenzo Ortega, MD","Raymond Quiambao, MD","Kyle Thomas Fresnido, MD","Princess Jeehan Linog, MD",
    "Guillen Segador, MD"] },
  { id: "HPPI", logo: HPPIImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Valucare", logo: valucareImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"]},
  { id: "Avega", logo: avegaImg, doctors: ["William Recuenco, MD", "Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD","Raquel Medel, MD",
    "Josephine Isabelle Pre, MD","Jose Magsino, MD", "Renante Del Valle, MD","Andrie Lorenzo Ortega, MD","Raymond Quiambao, MD","Princess Jeehan Linog, MD", "Guillen Segador, MD"] },
  { id: "Lacson & Lacson", logo: lacsonImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Medilink", logo: MediImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "HMI", logo: HMIImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Cocolife", logo: cocoImg, doctors: ["William Recuenco, MD","Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD", 
    "Angel Prodigalidad II, MD","Raquel Medel, MD", "Jose Magsino, MD", "Renante Del Valle, MD","Andrie Lorenzo Ortega, MD","Raymond Quiambao, MD","Irene Cabacang, MD", "John Collins De Castro, MD",
    "Kyle Thomas Fresnido, MD","Princess Jeehan Linog, MD", "Guillen Segador, MD", "Romeo Basingan Jr., MD"] },
  {id: "1Coop Health", logo: coopImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Benlife", logo: benImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Eastwest", logo: EWImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  {id: "Icare", logo: icareImg, doctors: ["William Recuenco, MD","Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD", "Angel Prodigalidad II, MD","Raquel Medel, MD", "Jose Magsino, MD",
    "Renante Del Valle, MD","Andrie Lorenzo Ortega, MD","Raymond Quiambao, MD","Irene Cabacang, MD", "John Collins De Castro, MD", "Kyle Thomas Fresnido, MD","Princess Jeehan Linog, MD", "Guillen Segador, MD", "Romeo Basingan Jr., MD"] },
  {id: "Sunlife Grepa", logo: sunImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  {id: "Amaphil", logo: amphilImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Pacific Cross", logo: pacificImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Forticare", logo: forteImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Kaiser", logo: kaiserImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Etiqa", logo: etiqaImg, doctors: ["William Recuenco, MD","Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD", "Angel Prodigalidad II, MD","Raquel Medel, MD",
    "Josephine Isabelle Pre, MD", "Renante Del Valle, MD","Andrie Lorenzo Ortega, MD","Princess Jeehan Linog, MD", "Guillen Segador, MD"] },
  { id: "IMS Wellth Care Inc.", logo: imsImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Generali", logo: generaliImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Wellcare", logo: wellcareImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Carewell", logo: carewellImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Medicare Plus", logo: medicareImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  {  id: "Medocare", logo: medocareImg, doctors: ["William Recuenco, MD","Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jeehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] }
];

const HMO = () => {
  const [selectedHMO, setSelectedHMO] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedHMO(null);
      setSearchResult(null);
      setIsClosing(false);
    }, 300);
  };
  const handleSearch = (term = searchTerm) => {
    if (!term.trim()) return;
    const value = term.toLowerCase();
    const doctorResults = hmoList
      .flatMap(hmo => hmo.doctors || [])
      .filter(doc => doc.toLowerCase().includes(value) || (doctorSpecialties[doc] && doctorSpecialties[doc].toLowerCase().includes(value)));

    if (doctorResults.length > 0) {
      const matchingHMOs = hmoList
        .filter(hmo => hmo.doctors.some(doc => doctorResults.includes(doc)))
        .map(hmo => hmo.id);

      setSearchResult({ type: "doctor", name: doctorResults[0], hmos: matchingHMOs });
      return;
    }
    const hmoMatch = hmoList.find(hmo => hmo.id.toLowerCase() === value);
    if (hmoMatch) {
      setSearchResult({ type: "hmo", hmo: hmoMatch });
      return;
    }

    setSearchResult({ type: "not-found", term });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchTerm);
      setShowDropdown(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const doctorSuggestions = hmoList
      .flatMap(hmo => hmo.doctors || [])
      .filter(doc => doc.toLowerCase().includes(value.toLowerCase()) || (doctorSpecialties[doc] && doctorSpecialties[doc].toLowerCase().includes(value.toLowerCase())))
      .map(doc => ({ name: doc, type: "Doctor" }));

    const hmoSuggestions = hmoList
      .filter(hmo => hmo.id.toLowerCase().includes(value.toLowerCase()))
      .map(h => ({
        name: h.id,
        type: h.id === "Etiqa" ? "Insurance Company" : "HMO"
      }));

    const allSuggestions = [...doctorSuggestions, ...hmoSuggestions];
    const uniqueSuggestions = Array.from(
      new Map(allSuggestions.map(item => [item.name, item])).values()
    );

    setSuggestions(uniqueSuggestions.slice(0, 5));
    setShowDropdown(uniqueSuggestions.length > 0);
  };

  const handleSelectSuggestion = (sugg) => {
    setSearchTerm(sugg);
    handleSearch(sugg);
    setShowDropdown(false);
  };
  return (
    <>
      <div className="hmo-page">
        <div className="hmo-banner"></div>
        <div className="hmo-content">
          <h1>OUR HMO PARTNERS</h1>
          <div className="search-container" ref={wrapperRef}>
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search doctor, specialty or HMO..."
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />
              {showDropdown && suggestions.length > 0 && (
                <ul className="suggestions-dropdown">
                  {suggestions.map((sugg, i) => (
                   <li key={i} className="suggestion-item" onClick={() => handleSelectSuggestion(sugg.name)}>
                    {sugg.name} <span className="suggestion-type">{sugg.type}</span>
                  </li>
                  ))}
                </ul>
              )}
            </div>
            <button onClick={() => handleSearch(searchTerm)}>Search</button>
          </div>

          <div className="hmo-grid">
            {hmoList
              .filter(hmo => hmo.id !== "Etiqa")
              .map(hmo => (
                <div key={hmo.id} className="hmo-card" onClick={() => setSelectedHMO(hmo)}>
                  <img src={hmo.logo} alt={hmo.id} className="hmo-logo" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                </div>
            ))}
          </div>
           <h2 className="insurance-title">INSURANCE COMPANY</h2>
        <div className="insurance-grid">
          {hmoList
            .filter(hmo => hmo.id === "Etiqa")
            .map(hmo => (
              <div key={hmo.id} className="hmo-card" onClick={() => setSelectedHMO(hmo)}>
                <img src={hmo.logo} alt={hmo.id} className="hmo-logo" />
              </div>
          ))}
        </div>
        </div>
      </div>
            
      {(selectedHMO || searchResult) && (
        <div className={`modal-overlay ${isClosing ? "fade-out" : "fade-in"} ${selectedHMO || searchResult ? "active" : ""}`} onClick={handleClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className={`modal-animated-content ${isClosing ? "zoom-out" : "zoom-in"}`}>
              {selectedHMO && (
                <>
                  <img src={selectedHMO.logo} alt={selectedHMO.id} className="modal-logo" />
                  <h3>Accredited Doctors:</h3>
                  <table className="doctor-table">
                    <thead>
                      <tr>
                        <th>Doctor</th>
                        <th>Specialty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedHMO.doctors.map((doc, idx) => (
                        <tr key={idx}>
                          <td>{doc}</td>
                          <td>{doctorSpecialties[doc] || "N/A"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              {searchResult && !selectedHMO && (
                <>
                  {searchResult.type === "doctor" && (
                    <>
                      <h2 className="doctor-name">{searchResult.name}</h2>
                      {doctorSpecialties[searchResult.name] && <h4>Specialty: {doctorSpecialties[searchResult.name]}</h4>}
                      <h3>Accredited HMOs:</h3>
                      <ul className="doctor-hmo-list">
                        {searchResult.hmos.map((hmo, idx) => <li key={idx}>{hmo}</li>)}
                      </ul>
                    </>
                  )}
                  {searchResult.type === "hmo" && (
                    <>
                      <img src={searchResult.hmo.logo} alt={searchResult.hmo.id} className="modal-logo" />
                      <h3>Accredited Doctors:</h3>
                      <table className="doctor-table">
                        <thead>
                          <tr>
                            <th>Doctor</th>
                            <th>Specialty</th>
                          </tr>
                        </thead>
                        <tbody>
                          {searchResult.hmo.doctors.map((doc, idx) => (
                            <tr key={idx}>
                              <td>{doc}</td>
                              <td>{doctorSpecialties[doc] || "N/A"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  )}
                  {searchResult.type === "not-found" && <h2>No results found for "{searchResult.term}"</h2>}
                </>
              )}
            </div>
            <button className="close-btn" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default HMO;