import React, { useState, useRef, useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import ChatBot from "../Components/ChatBot/ChatBot";
import "./HMO.css";
import maxicareImg from "../assets/Maxicare.png";
import medicardImg from "../assets/Medicard.png";
import interllicareImg from "../assets/intellecare.png";
import philcareImg from "../assets/philcare.png";
import HPPIImg from "../assets/HPPI.png";
import valucareImg from "../assets/Valucare.png";
import avegaImg from "../assets/avega.png";
import lacsonImg from "../assets/lacson.png";
import MediImg from "../assets/Medilink.png";
import HMIImg from "../assets/HMI.png";
import cocoImg from "../assets/COCOLIFE.png";
import coopImg from "../assets/coop.png";
import benImg from "../assets/benlife.png";
import EWImg from "../assets/eastwest.png";
import icareImg from "../assets/icare.png";
import inlifeImg from "../assets/inlife.png";
import sunImg from "../assets/sunlife.png";
import amphilImg from "../assets/amphil.png";
import pacificImg from "../assets/pacific.png";
import forteImg from "../assets/forte.png";
import kaiserImg from "../assets/kaiser.png";
import etiqaImg from "../assets/etiqa.png";
import imsImg from "../assets/ims.png";
import generaliImg from "../assets/generali.png";
import wellcareImg from "../assets/wellcare.png";
import carewellImg from "../assets/carewell.png"; 
import medicareImg from "../assets/medicare.png";
import medocareImg from "../assets/medocare.png";

const hmoList = [
  { id: "Maxicare", logo: maxicareImg, doctors: ["William Recuenco, MD","Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD", 
    "Angel Prodigalidad II, MD","Josephine Pre, MD", "Renante Del Valle, MD","Andrie Lorenzo Ortiga, MD","Raymond Quiambao, MD","Princess Jeehan Linog, MD",
    "Guillen Segador, MD"] },
  { id: "Medicard", logo: medicardImg, doctors: ["William Recuenco, MD", "Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD","Mafil Calamay, MD",
    "Angel Prodigalidad II, MD","Jose Magsino, MD", "Renante Del Valle, MD","Andrie Lorenzo Ortiga, MD","Raymond Quiambao, MD","Kyle Thomas Fresnido, MD","Princess Jeehan Linog, MD",
    "Guillen Segador, MD"] },
  { id: "Intellicare", logo: interllicareImg, doctors: ["William Recuenco, MD", "Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD","Raquel Medel, MD",
    "Josephine Pre, MD","Jose Magsino, MD", "Renante Del Valle, MD","Andrie Lorenzo Ortiga, MD","Raymond Quiambao, MD","Princess Jeehan Linog, MD", "Guillen Segador, MD"] },
  { id: "Philcare", logo: philcareImg, doctors: ["William Recuenco, MD","Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD", 
    "Angel Prodigalidad II, MD","Raquel Medel, MD", "Jose Magsino, MD","Renante Del Valle, MD","Andrie Lorenzo Ortiga, MD","Raymond Quiambao, MD","Kyle Thomas Fresnido, MD","Princess Jeehan Linog, MD",
    "Guillen Segador, MD"] },
  { id: "HPPI", logo: HPPIImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Valucare", logo: valucareImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"]},
  { id: "Avega", logo: avegaImg, doctors: ["William Recuenco, MD", "Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD","Raquel Medel, MD",
    "Josephine Pre, MD","Jose Magsino, MD", "Renante Del Valle, MD","Andrie Lorenzo Ortiga, MD","Raymond Quiambao, MD","Princess Jeehan Linog, MD", "Guillen Segador, MD"] },
  { id: "Lacson & Lacson", logo: lacsonImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Medilink", logo: MediImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "HMI", logo: HMIImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Cocolife", logo: cocoImg, doctors: ["William Recuenco, MD","Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD", 
    "Angel Prodigalidad II, MD","Raquel Medel, MD", "Jose Magsino, MD", "Renante Del Valle, MD","Andrie Lorenzo Ortiga, MD","Raymond Quiambao, MD","Irene Cabacang, MD", "John Collins De Castro, MD",
    "Kyle Thomas Fresnido, MD","Princess Jeehan Linog, MD", "Guillen Segador, MD", "Romeo Basingan Jr., MD"] },
  {id: "1Coop Health", logo: coopImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Benlife", logo: benImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Eastwest", logo: EWImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  {id: "Icare", logo: icareImg, doctors: ["William Recuenco, MD","Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD", "Angel Prodigalidad II, MD","Raquel Medel, MD", "Jose Magsino, MD",
    "Renante Del Valle, MD","Andrie Lorenzo Ortiga, MD","Raymond Quiambao, MD","Irene Cabacang, MD", "John Collins De Castro, MD", "Kyle Thomas Fresnido, MD","Princess Jeehan Linog, MD", "Guillen Segador, MD", "Romeo Basingan Jr., MD"] },
  {id: "Inlife", logo: inlifeImg, doctors: ["William Recuenco, MD","Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD", "Angel Prodigalidad II, MD","Raquel Medel, MD", "Jose Magsino, MD",
    "Renante Del Valle, MD","Andrie Lorenzo Ortiga, MD","Raymond Quiambao, MD","Irene Cabacang, MD", "John Collins De Castro, MD", "Kyle Thomas Fresnido, MD","Princess Jeehan Linog, MD", "Guillen Segador, MD", "Romeo Basingan Jr., MD"] },
  {id: "Sunlife Grepa", logo: sunImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  {id: "Amaphil", logo: amphilImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Pacific Cross", logo: pacificImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Forticare", logo: forteImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Kaiser", logo: kaiserImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Etiqa", logo: etiqaImg, doctors: ["William Recuenco, MD","Evelyn Recuenco, MD", "Cristina Malinao, MD","Joel Santos, MD","Jennifer Rodriguez, MD","Rosario Carreon, MD", 
    "Maria Sheila Serrano, MD","Phoebe Anne Santos, MD", "Mar Joseph Florentino, MD", "Gretchen Calderon, MD","Rocky Perocho, MD", "Michael Bravo, MD", "Angel Prodigalidad II, MD","Raquel Medel, MD",
    "Josephine Pre", "Renante Del Valle, MD","Andrie Lorenzo Ortiga, MD","Princess Jeehan Linog, MD", "Guillen Segador, MD"] },
  { id: "IMS Wellth Care Inc.", logo: imsImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Generali", logo: generaliImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Wellcare", logo: wellcareImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Carewell", logo: carewellImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  { id: "Medicare Plus", logo: medicareImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] },
  {  id: "Medocare", logo: medocareImg, doctors: ["Angel Prodigalidad II, MD", "Mafil Calamay, MD", "Cristina Malinao, MD", "Joel Santos, MD", "Mar Joseph Florentino, MD", "Evelyn Recuenco, MD",
    "Maria Sheila Serrano, MD", "Raquel Medel, MD", "Phoebe Anne Santos, MD", "Jennifer Rodriguez, MD", "Ma. Helen 'Sweet' Perez-Florentino, MD", "Anna Melisa Ng, MD", "Renante Del Valle, MD",
    "Aubrey Ambata, MD", "Rosario Carreon, MD", "Princess Jehan Linog, MD", "Andrie Lorenzo Ortega, MD", "John Collins De Castro, MD", "Irene Cabacang, MD", "Kyle Thomas Fresnido, MD", "Gretchen Calderon, MD"] }
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
      .filter(doc => doc.toLowerCase().includes(value));

    if (doctorResults.length > 0) {
      const matchingHMOs = hmoList
        .filter(hmo => hmo.doctors.some(doc => doc.toLowerCase().includes(value)))
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
    setShowDropdown(false);s
    return;
  }

  const doctorSuggestions = hmoList
    .flatMap(hmo => hmo.doctors || [])
    .filter(doc => doc.toLowerCase().includes(value.toLowerCase()))
    .map(doc => ({ name: doc, type: "Doctor" }));

  const hmoSuggestions = hmoList
    .filter(hmo => hmo.id.toLowerCase().includes(value.toLowerCase()))
    .map(h => ({ name: h.id, type: "HMO" }));

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

          <div className="search-container">
                <div className="search-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search doctor or HMO..."
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                  />
                  {showDropdown && suggestions.length > 0 && (
                    <ul className="suggestions-dropdown">
                      {suggestions.map((sugg, i) => (
                        <li
                          key={i}
                          className="suggestion-item"
                          onClick={() => handleSelectSuggestion(sugg.name)}
                        >
                          {sugg.name}
                          <span className="suggestion-type">{sugg.type}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <button onClick={() => handleSearch(searchTerm)}>Search</button>
              </div>
          <div className="hmo-grid">
            {hmoList.map(hmo => (
              <div key={hmo.id} className="hmo-card" onClick={() => setSelectedHMO(hmo)}>
                <img
                  src={hmo.logo}
                  alt={hmo.id}
                  className="hmo-logo"
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
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
                  <ul>
                    {selectedHMO.doctors.map((doc, idx) => <li key={idx}>{doc}</li>)}
                  </ul>
                </>
              )}

              {searchResult && !selectedHMO && (
                <>
                {searchResult.type === "doctor" && (
                  <>
                        <h2>{searchResult.name}</h2>
                        <h3>Accredited HMOs:</h3>
                        <ul className="doctor-hmo-list">
                          {searchResult.hmos.map((hmo, idx) => (
                            <li key={idx}>{hmo}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  {searchResult.type === "hmo" && (
                    <>
                      <img src={searchResult.hmo.logo} alt={searchResult.hmo.id} className="modal-logo" />
                      <h3>Accredited Doctors:</h3>
                      <ul>
                        {searchResult.hmo.doctors.map((doc, idx) => <li key={idx}>{doc}</li>)}
                      </ul>
                    </>
                  )}
                  {searchResult.type === "not-found" && (
                    <h2>No results found for "{searchResult.term}"</h2>
                  )}
                </>
              )}
            </div>
            <button className="close-btn" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}

      <ChatBot />
      <Footer />
    </>
  );
};

export default HMO;