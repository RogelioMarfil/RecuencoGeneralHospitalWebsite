const MAXICARE = [
  "William Recuenco, MD",
  "Evelyn Recuenco, MD",
  "Cristina Malinao, MD",
  "Joel Santos, MD",
  "Jennifer Rodriguez, MD",
  "Rosario Carreon, MD",
  "Maria Sheila Serrano, MD",
  "Phoebe Ann Santos, MD",
  "Mar Joseph Florentino, MD",
  "Gretchen Calderon, MD",
  "Rocky Perocho, MD",
  "Michael Bravo, MD",
  "Angel Prodigalidad II, MD",
  "Josephine Isabelle Pre, MD",
  "Renante Del Valle, MD",
  "Andrie Lorenzo Ortega, MD",
  "Raymond Quiambao, MD",
  "Princess Jeehan Linog, MD",
  "Guillen Segador, MD",
];

const MEDICARD = [
  ...MAXICARE,
  "Mafil Calamay, MD",
  "Jose Magsino, MD",
  "Kyle Thomas Fresnido, MD",
];

const INTELLICARE = [
  "William Recuenco, MD",
  "Evelyn Recuenco, MD",
  "Cristina Malinao, MD",
  "Joel Santos, MD",
  "Jennifer Rodriguez, MD",
  "Rosario Carreon, MD",
  "Maria Sheila Serrano, MD",
  "Phoebe Ann Santos, MD",
  "Mar Joseph Florentino, MD",
  "Gretchen Calderon, MD",
  "Rocky Perocho, MD",
  "Michael Bravo, MD",
  "Raquel Medel, MD",
  "Josephine Isabelle Pre, MD",
  "Jose Magsino, MD",
  "Renante Del Valle, MD",
  "Andrie Lorenzo Ortega, MD",
  "Raymond Quiambao, MD",
  "Princess Jeehan Linog, MD",
  "Guillen Segador, MD",
];

const PHILCARE = [
  ...MAXICARE.filter(
    (doctor) =>
      ![
        "Josephine Isabelle Pre, MD",
        "Mafil Calamay, MD",
      ].includes(doctor)
  ),
  "Raquel Medel, MD",
  "Kyle Thomas Fresnido, MD",
];

const HPPI = [
  "William Recuenco, MD",
  "Angel Prodigalidad II, MD",
  "Mafil Calamay, MD",
  "Cristina Malinao, MD",
  "Joel Santos, MD",
  "Mar Joseph Florentino, MD",
  "Evelyn Recuenco, MD",
  "Maria Sheila Serrano, MD",
  "Raquel Medel, MD",
  "Phoebe Ann Santos, MD",
  "Jennifer Rodriguez, MD",
  "Ma. Helen Perez-Florentino, MD",
  "Anna Melisa Ng, MD",
  "Renante Del Valle, MD",
  "Aubrey Ambata, MD",
  "Rosario Carreon, MD",
  "Princess Jeehan Linog, MD",
  "Andrie Lorenzo Ortega, MD",
  "John Collins De Castro, MD",
  "Irene Cabacang, MD",
  "Kyle Thomas Fresnido, MD",
  "Gretchen Calderon, MD",
];

const COCOLIFE = [
  ...HPPI,
  "Rocky Perocho, MD",
  "Michael Bravo, MD",
  "Angel Prodigalidad II, MD",
  "Jose Magsino, MD",
  "Raymond Quiambao, MD",
  "Romeo Basingan Jr., MD",
];

export const hmoList = [
  { name: "Maxicare", doctors: MAXICARE },
  { name: "Medicard", doctors: MEDICARD },
  { name: "Intellicare", doctors: INTELLICARE },
  { name: "Philcare", doctors: PHILCARE },
  { name: "HPPI", doctors: HPPI },
  { name: "Valucare", doctors: HPPI },
  { name: "Avega", doctors: INTELLICARE },
  { name: "Lacson & Lacson", doctors: HPPI },
  { name: "Medilink", doctors: HPPI },
  { name: "HMI", doctors: HPPI },
  { name: "Cocolife", doctors: COCOLIFE },
  { name: "1Coop Health", doctors: HPPI },
  { name: "Benlife", doctors: HPPI },
  { name: "Eastwest", doctors: HPPI },
  { name: "Icare", doctors: COCOLIFE },
  { name: "Sunlife Grepa", doctors: HPPI },
  { name: "Amaphil", doctors: HPPI },
  { name: "Pacific Cross", doctors: HPPI },
  { name: "Forticare", doctors: HPPI },
  { name: "Kaiser", doctors: HPPI },
  { name: "Etiqa", doctors: MAXICARE },
  { name: "IMS Wellth Care Inc.", doctors: HPPI },
  { name: "Generali", doctors: HPPI },
  { name: "Wellcare", doctors: HPPI },
  { name: "Carewell", doctors: HPPI },
  { name: "Medocare", doctors: HPPI },
];

export const doctorSpecialties = {
  "William Recuenco, MD": "Ophthalmologist",
  "Evelyn Recuenco, MD": "Pediatrician",
  "Cristina Malinao, MD": "Internal Medicine",
  "Joel Santos, MD": "Internal Medicine - Cardiologist",
  "Jennifer Rodriguez, MD": "Internal Medicine - Cardiologist",
  "Rosario Carreon, MD": "OB-GYNE",
  "Maria Sheila Serrano, MD": "Pediatrician",
  "Phoebe Ann Santos, MD": "Pediatric-Nephrology",
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
  "Ma. Helen Perez-Florentino, MD":
    "Aesthetic Dermatology / Lifestyle Medicine Specialist",
  "Anna Melisa Ng, MD":
    "Internal Medicine-Gastroenterology Digestive Endoscopy and ERCP",
  "Romeo Basingan Jr., MD": "General Medicine",
  "Kyle Thomas Fresnido, MD": "General Surgeon",
  "Aubrey Ambata, MD": "ENT-HNS",
};

export const doctorAliases = {
  "phoebe ann santos": "Phoebe Ann Santos, MD",
  "phoebe anne santos": "Phoebe Ann Santos, MD",

  "princess jehan linog": "Princess Jeehan Linog, MD",
  "princess jeehan linog": "Princess Jeehan Linog, MD",

  "raymund quiambao": "Raymond Quiambao, MD",
  "raymond quiambao": "Raymond Quiambao, MD",

  "jose carlo magsino": "Jose Magsino, MD",
  "jose magsino": "Jose Magsino, MD",

  "ma. helen grace florentino": "Ma. Helen Perez-Florentino, MD",
  "ma helen grace florentino": "Ma. Helen Perez-Florentino, MD",
  "ma. helen perez-florentino": "Ma. Helen Perez-Florentino, MD",
};