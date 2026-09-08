import React, { useEffect, useRef, useState } from "react";
import "./RICA.css";

import { doctors } from "../../data/doctorsData";
import {
  hmoList,
  doctorSpecialties,
  doctorAliases,
} from "../../data/hmoData";

const STORAGE_KEY = "ricaConversation";
const LANGUAGE_KEY = "ricaLanguage";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const RICA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(
    () => sessionStorage.getItem(LANGUAGE_KEY) || null
  );

  const [messages, setMessages] = useState(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(
    () => !sessionStorage.getItem(LANGUAGE_KEY)
  );

  const chatEndRef = useRef(null);

  /* --------------------------------
     SAVE CONVERSATION
  -------------------------------- */

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.error("RICA session storage error:", error);
    }
  }, [messages]);

  /* --------------------------------
     SAVE LANGUAGE
  -------------------------------- */

  useEffect(() => {
    if (language) {
      sessionStorage.setItem(LANGUAGE_KEY, language);
    }
  }, [language]);

  /* --------------------------------
     SCROLL CHAT
  -------------------------------- */

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  /* --------------------------------
     OPEN RICA
  -------------------------------- */

  const openRica = () => {
    setIsOpen(true);

    if (!language) {
      setShowLanguageOptions(true);
    } else if (messages.length === 0) {
      addBotMessage(
        language === "en"
          ? "👋 Welcome to Recuenco General Hospital! I'm RICA, your hospital assistant."
          : "👋 Maligayang pagdating sa Recuenco General Hospital! Ako si RICA, ang inyong hospital assistant."
      );
    }
  };

  const closeRica = () => {
    setIsOpen(false);
  };

  /* --------------------------------
     BOT MESSAGE
  -------------------------------- */

  const addBotMessage = (text, delay = 600) => {
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text,
        },
      ]);

      setTyping(false);
    }, delay);
  };

  /* --------------------------------
     LANGUAGE
  -------------------------------- */

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    sessionStorage.setItem(LANGUAGE_KEY, lang);
    setShowLanguageOptions(false);

    setMessages([
      {
        sender: "bot",
        text:
          lang === "en"
            ? "🇬🇧 English selected."
            : "🇵🇭 Tagalog ang napili.",
      },
      {
        sender: "bot",
        text:
          lang === "en"
            ? "Hi! I'm RICA. How can I help you today?"
            : "Kamusta! Ako si RICA. Paano kita matutulungan ngayon?",
      },
    ]);
  };

  /* --------------------------------
     NORMALIZE TEXT
  -------------------------------- */

  const normalize = (text) =>
    text
      .toLowerCase()
      .replace(/[.,!?'"’]/g, "")
      .replace(/\bdr\b/g, "")
      .replace(/\bdoctor\b/g, "")
      .replace(/\s+/g, " ")
      .trim();

  /* --------------------------------
     FIND DOCTOR
  -------------------------------- */

  const findDoctor = (text) => {
    const normalized = normalize(text);

    // Alias search
    for (const alias in doctorAliases) {
      if (normalized.includes(alias)) {
        return doctorAliases[alias];
      }
    }

    // Exact/full doctor search
    const match = doctors.find((doctor) => {
      const doctorName = normalize(doctor.name);
      const withoutMd = doctorName.replace(", md", "");

      return (
        normalized.includes(doctorName) ||
        normalized.includes(withoutMd)
      );
    });

    if (match) return match.name;

    // Last-name search
    const lastNameMatch = doctors.find((doctor) => {
      const parts = doctor.name.toLowerCase().split(" ");
      const lastName = parts[parts.length - 2];

      return lastName && normalized.includes(lastName);
    });

    return lastNameMatch?.name || null;
  };

  /* --------------------------------
     FIND HMO
  -------------------------------- */

  const findHmo = (text) => {
    const normalized = normalize(text);

    return (
      hmoList.find((hmo) =>
        normalized.includes(normalize(hmo.name))
      ) || null
    );
  };

  /* --------------------------------
     TODAY
  -------------------------------- */

  const getToday = () => {
    return days[new Date().getDay()];
  };

  /* --------------------------------
     DOCTOR INFORMATION
  -------------------------------- */

  const getDoctorInfo = (doctorName) => {
    const doctor = doctors.find(
      (doc) => doc.name === doctorName
    );

    if (!doctor) return null;

    const specialty =
      doctor.specialty ||
      doctorSpecialties[doctor.name] ||
      "Medical Doctor";

    return {
      ...doctor,
      specialty,
    };
  };

  /* --------------------------------
     DOCTOR SCHEDULE
  -------------------------------- */

  const formatDoctorSchedule = (doctor) => {
    const scheduleEntries = Object.entries(
      doctor.schedule
    ).filter(
      ([, value]) =>
        value && value.trim() !== ""
    );

    if (scheduleEntries.length === 0) {
      if (doctor.type === "Appointment") {
        return `📅 By Appointment

⚠️ Please call OPD Information at 0923-717-9739 for confirmation.`;
      }

      if (doctor.type === "Reliever") {
        return `📅 Reliever Doctor

⚠️ Please call OPD Information at 0923-717-9739 for confirmation of availability.`;
      }

      if (doctor.type === "Referral Doctor") {
        return `📅 Referral Doctor

⚠️ Please call OPD Information at 0923-717-9739 for confirmation.`;
      }

      return `📅 No regular schedule is currently listed.

⚠️ Please call OPD Information at 0923-717-9739 for confirmation.`;
    }

    const scheduleText = scheduleEntries
      .map(([day, time]) => `📅 ${day}: ${time}`)
      .join("\n");

    return `${scheduleText}

⚠️ Please call OPD Information at 0923-717-9739 for schedule confirmation, as schedules may change without prior notice.`;
  };

  /* --------------------------------
     DOCTOR + HMO
  -------------------------------- */

  const getDoctorHmos = (doctorName) => {
    return hmoList.filter((hmo) =>
      hmo.doctors.includes(doctorName)
    );
  };

  /* --------------------------------
     HMO LIST
  -------------------------------- */

  const getHmoListText = () => {
    return hmoList
      .map((hmo) => hmo.name)
      .join(", ");
  };

  /* --------------------------------
     HANDLE QUICK ACTION
  -------------------------------- */

  const handleQuickAction = (action) => {
    if (action === "services") {
      addBotMessage(
        language === "en"
          ? `🏥 We provide healthcare services including:

• Pediatrics
• Maternity / OB-Gynecology
• General Medicine
• General & Minor Surgery
• Eye Surgery / Cataract
• Colonoscopy
• Endoscopy
• Drug Testing
• Emergency Care
• Laboratory
• Radiology
• Ultrasound
• Heart Station
• Animal Bite Center
• Pharmacy

You can also ask me about a specific service.`
          : `🏥 Nagbibigay kami ng iba't ibang healthcare services tulad ng:

• Pediatrics
• Maternity / OB-Gynecology
• General Medicine
• General & Minor Surgery
• Eye Surgery / Cataract
• Colonoscopy
• Endoscopy
• Drug Testing
• Emergency Care
• Laboratory
• Radiology
• Ultrasound
• Heart Station
• Animal Bite Center
• Pharmacy

Maaari rin ninyo akong tanungin tungkol sa isang partikular na serbisyo.`
      );

      return;
    }

    if (action === "doctors") {
      addBotMessage(
        language === "en"
          ? "👨‍⚕️ I can help you find a doctor, specialty, schedule, or appointment status. Try asking: \"What is Joel Santos' schedule?\""
          : "👨‍⚕️ Matutulungan kitang maghanap ng doktor, specialty, schedule, o appointment status. Halimbawa: \"Ano ang schedule ni Joel Santos?\""
      );

      return;
    }

    if (action === "hmo") {
      addBotMessage(
        language === "en"
          ? `💳 Our current HMO and insurance partners include:

${getHmoListText()}

You can also ask me:
"Is Joel Santos accredited with Maxicare?"

I can check the doctor and HMO information for you.`
          : `💳 Ang aming kasalukuyang HMO at insurance partners ay:

${getHmoListText()}

Maaari rin ninyong itanong:
"Accredited ba si Joel Santos sa Maxicare?"

Maaari kong tingnan ang doctor at HMO information para sa inyo.`
      );

      return;
    }

    if (action === "availability") {
      const today = getToday();

      const availableToday = doctors.filter(
        (doctor) =>
          doctor.schedule[today] &&
          doctor.schedule[today].trim() !== ""
      );

      if (availableToday.length === 0) {
        addBotMessage(
          language === "en"
            ? `📅 I don't have any regular doctor schedules listed for ${today}.

⚠️ Please call OPD Information at 0923-717-9739 for confirmation.`
            : `📅 Wala akong nakalistang regular doctor schedule para sa ${today}.

⚠️ Mangyaring tumawag sa OPD Information sa 0923-717-9739 para sa confirmation.`
        );

        return;
      }

      const scheduleText = availableToday
        .map(
          (doctor) =>
            `👨‍⚕️ ${doctor.name}\n${doctor.specialty}\n${doctor.schedule[today]}`
        )
        .join("\n\n");

      addBotMessage(
        language === "en"
          ? `📅 Doctors with a listed schedule today (${today}):

${scheduleText}

⚠️ Please call OPD Information at 0923-717-9739 for confirmation, as schedules may change without prior notice.`
          : `📅 Mga doktor na may nakalistang schedule ngayong ${today}:

${scheduleText}

⚠️ Mangyaring tumawag sa OPD Information sa 0923-717-9739 para sa confirmation dahil maaaring magbago ang schedule nang walang abiso.`
      );

      return;
    }

    if (action === "location") {
      addBotMessage(
        language === "en"
          ? `📍 Recuenco General Hospital Inc.

#68 Sampaloc Extension,
North Signal Village,
Taguig City, Metro Manila 1630

You may also call OPD Information at 0923-717-9739.`
          : `📍 Recuenco General Hospital Inc.

#68 Sampaloc Extension,
North Signal Village,
Taguig City, Metro Manila 1630

Maaari rin kayong tumawag sa OPD Information sa 0923-717-9739.`
      );

      return;
    }

    if (action === "about") {
      addBotMessage(
        language === "en"
          ? "ℹ️ Recuenco General Hospital Inc. is a PhilHealth-accredited Level 1 hospital serving patients and families in Taguig City."
          : "ℹ️ Ang Recuenco General Hospital Inc. ay isang PhilHealth-accredited Level 1 hospital na naglilingkod sa mga pasyente at pamilya sa Taguig City."
      );
    }
  };

  /* --------------------------------
     SEND MESSAGE
  -------------------------------- */

  const handleSend = (textOverride) => {
    const message = (
      textOverride !== undefined ? textOverride : input
    ).trim();

    if (!message || typing) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    setInput("");

    const normalized = normalize(message);

    /* LANGUAGE */

    if (
      normalized.includes("change language") ||
      normalized.includes("baguhin ang wika") ||
      normalized.includes("change my language")
    ) {
      setShowLanguageOptions(true);

      addBotMessage(
        language === "en"
          ? "Please choose your preferred language."
          : "Pumili ng inyong gustong wika."
      );

      return;
    }

    /* DOCTOR */

    const doctorName = findDoctor(message);

    if (doctorName) {
      const doctor = getDoctorInfo(doctorName);

      if (!doctor) return;

      const hmo = findHmo(message);

      /* Doctor + HMO question */

      if (
        hmo &&
        (
          normalized.includes("accredit") ||
          normalized.includes("accept") ||
          normalized.includes("covered") ||
          normalized.includes("hmo") ||
          normalized.includes("insurance") ||
          normalized.includes("maxicare") ||
          normalized.includes("medicard") ||
          normalized.includes("intellicare")
        )
      ) {
        const accredited = hmo.doctors.includes(
          doctorName
        );

        if (accredited) {
          addBotMessage(
            language === "en"
              ? `✅ Yes. ${doctor.name} is currently listed as accredited with ${hmo.name}.

👨‍⚕️ Specialty: ${doctor.specialty}

Please note that HMO accreditation and coverage may change. Please confirm with the hospital/HMO when needed.`
              : `✅ Oo. Si ${doctor.name} ay kasalukuyang nakalista bilang accredited sa ${hmo.name}.

👨‍⚕️ Specialty: ${doctor.specialty}

Pakitandaan na maaaring magbago ang HMO accreditation at coverage. Mangyaring mag-confirm sa hospital/HMO kung kinakailangan.`
          );
        } else {
          addBotMessage(
            language === "en"
              ? `❌ ${doctor.name} is not currently listed under ${hmo.name} in RICA's accreditation data.

This does not necessarily mean your HMO cannot be used for other hospital services. Please confirm with our HMO section before your visit.`
              : `❌ Si ${doctor.name} ay hindi kasalukuyang nakalista sa ilalim ng ${hmo.name} sa accreditation data ni RICA.

Hindi ito nangangahulugang hindi magagamit ang inyong HMO para sa ibang hospital services. Mangyaring mag-confirm sa aming HMO section bago pumunta.`
          );
        }

        return;
      }

      /* Ask for doctor's HMOs */

      if (
        normalized.includes("what hmo") ||
        normalized.includes("which hmo") ||
        normalized.includes("hmo does") ||
        normalized.includes("hmo affiliation") ||
        normalized.includes("insurance")
      ) {
        const affiliations =
          getDoctorHmos(doctorName);

        if (affiliations.length === 0) {
          addBotMessage(
            language === "en"
              ? `I don't currently have HMO accreditation information listed for ${doctor.name}. Please confirm with our HMO section.`
              : `Wala akong kasalukuyang nakalistang HMO accreditation information para kay ${doctor.name}. Mangyaring mag-confirm sa aming HMO section.`
          );
        } else {
          addBotMessage(
            language === "en"
              ? `💳 ${doctor.name} is currently listed with:

${affiliations
  .map((hmo) => `• ${hmo.name}`)
  .join("\n")}

⚠️ HMO accreditation may change, so please confirm before your visit.`
              : `💳 Si ${doctor.name} ay kasalukuyang nakalista sa:

${affiliations
  .map((hmo) => `• ${hmo.name}`)
  .join("\n")}

⚠️ Maaaring magbago ang HMO accreditation, kaya mangyaring mag-confirm bago pumunta.`
          );
        }

        return;
      }

      /* Doctor availability */

      if (
        normalized.includes("available") ||
        normalized.includes("availability") ||
        normalized.includes("schedule") ||
        normalized.includes("oras") ||
        normalized.includes("kailan") ||
        normalized.includes("today") ||
        normalized.includes("ngayon")
      ) {
        const today = getToday();
        const todaySchedule =
          doctor.schedule[today];

        if (
          todaySchedule &&
          todaySchedule.trim() !== ""
        ) {
          addBotMessage(
            language === "en"
              ? `👨‍⚕️ ${doctor.name}
Specialty: ${doctor.specialty}

📅 ${today}: ${todaySchedule}

⚠️ Please call OPD Information at 0923-717-9739 for schedule confirmation, as schedules may change without prior notice.`
              : `👨‍⚕️ ${doctor.name}
Specialty: ${doctor.specialty}

📅 ${today}: ${todaySchedule}

⚠️ Mangyaring tumawag sa OPD Information sa 0923-717-9739 para sa confirmation dahil maaaring magbago ang schedule nang walang abiso.`
          );
        } else {
          addBotMessage(
            language === "en"
              ? `👨‍⚕️ ${doctor.name}
Specialty: ${doctor.specialty}

${formatDoctorSchedule(doctor)}

There is no regular schedule listed for ${today}.`
              : `👨‍⚕️ ${doctor.name}
Specialty: ${doctor.specialty}

${formatDoctorSchedule(doctor)}

Walang regular schedule na nakalista para sa ${today}.`
          );
        }

        return;
      }

      /* Basic doctor question */

      addBotMessage(
        language === "en"
          ? `👨‍⚕️ ${doctor.name}
Specialty: ${doctor.specialty}

You can ask me about this doctor's schedule, availability, or HMO accreditation.`
          : `👨‍⚕️ ${doctor.name}
Specialty: ${doctor.specialty}

Maaari ninyo akong tanungin tungkol sa schedule, availability, o HMO accreditation ng doktor na ito.`
      );

      return;
    }

    /* HMO QUESTION */

    const hmo = findHmo(message);

    if (hmo) {
      const hmoDoctors = hmo.doctors
        .map((name) => {
          const doctor = doctors.find(
            (doc) => doc.name === name
          );

          return doctor
            ? `${doctor.name} — ${doctor.specialty}`
            : name;
        })
        .slice(0, 15);

      addBotMessage(
        language === "en"
          ? `💳 ${hmo.name}

Doctors currently listed with this HMO include:

${hmoDoctors.join("\n")}

${hmo.doctors.length > 15 ? "\n…and more." : ""}

You can ask me:
"Is Joel Santos accredited with Maxicare?"`
          : `💳 ${hmo.name}

Mga doktor na kasalukuyang nakalista sa HMO na ito:

${hmoDoctors.join("\n")}

${hmo.doctors.length > 15 ? "\n…at marami pa." : ""}

Maaari ninyong itanong:
"Accredited ba si Joel Santos sa Maxicare?"`
      );

      return;
    }

    /* GENERAL KEYWORDS */

    if (
      normalized.includes("service") ||
      normalized.includes("services") ||
      normalized.includes("serbisyo")
    ) {
      handleQuickAction("services");
      return;
    }

    if (
      normalized.includes("location") ||
      normalized.includes("address") ||
      normalized.includes("saan") ||
      normalized.includes("lokasyon")
    ) {
      handleQuickAction("location");
      return;
    }

    if (
      normalized.includes("doctor") ||
      normalized.includes("doktor")
    ) {
      handleQuickAction("doctors");
      return;
    }

    if (
      normalized.includes("hmo") ||
      normalized.includes("insurance")
    ) {
      handleQuickAction("hmo");
      return;
    }

    if (
      normalized.includes("hello") ||
      normalized.includes("hi") ||
      normalized.includes("kamusta") ||
      normalized.includes("kumusta")
    ) {
      addBotMessage(
        language === "en"
          ? "👋 Hello! I'm RICA. How can I help you today?"
          : "👋 Kamusta! Ako si RICA. Paano kita matutulungan ngayon?"
      );

      return;
    }

    /* EMERGENCY */

    if (
      normalized.includes("emergency") ||
      normalized.includes("emergency room") ||
      normalized.includes("nahihilo") ||
      normalized.includes("hirap huminga")
    ) {
      addBotMessage(
        language === "en"
          ? "🚨 If you are experiencing a medical emergency, please seek immediate medical attention or go to the nearest emergency facility. RICA cannot diagnose or treat medical emergencies."
          : "🚨 Kung nakakaranas kayo ng medical emergency, mangyaring humingi agad ng medical assistance o pumunta sa pinakamalapit na emergency facility. Hindi maaaring mag-diagnose o magbigay ng emergency treatment si RICA."
      );

      return;
    }

    /* FALLBACK */

    addBotMessage(
      language === "en"
        ? "I'm here to help. You can ask me about our services, doctors and schedules, doctor availability, HMO accreditation, location, or hospital information."
        : "Narito ako upang tumulong. Maaari ninyo akong tanungin tungkol sa aming services, doctors at schedules, doctor availability, HMO accreditation, location, o hospital information."
    );
  };

  /* --------------------------------
     QUICK BUTTONS
  -------------------------------- */

  const quickActions = [
    {
      id: "services",
      en: "🏥 Services",
      tl: "🏥 Serbisyo",
    },
    {
      id: "doctors",
      en: "👨‍⚕️ Doctors & Schedule",
      tl: "👨‍⚕️ Doctors & Schedule",
    },
    {
      id: "hmo",
      en: "💳 HMO / Insurance",
      tl: "💳 HMO / Insurance",
    },
    {
      id: "availability",
      en: "📅 Doctor Availability",
      tl: "📅 Doctor Availability",
    },
    {
      id: "location",
      en: "📍 Location",
      tl: "📍 Lokasyon",
    },
    {
      id: "about",
      en: "ℹ️ About Hospital",
      tl: "ℹ️ Tungkol sa Hospital",
    },
  ];

  /* --------------------------------
     UI
  -------------------------------- */

  return (
    <>
      {!isOpen && (
        <div
          className="rica-nurse-launcher"
          onClick={openRica}
          role="button"
          tabIndex={0}
        >
          <div className="rica-speech">
            {language === "tl"
              ? "Hi! Kailangan mo ba ng tulong? 👋"
              : "Hi! How can I help you? 👋"}
          </div>

          <div className="rica-nurse">
            <div className="nurse-head">
              <div className="nurse-hair"></div>
              <div className="nurse-face">
                <span className="eye left"></span>
                <span className="eye right"></span>
                <span className="smile"></span>
              </div>
              <div className="nurse-cap">
                <span>+</span>
              </div>
            </div>

            <div className="nurse-body">
              <div className="nurse-cross">+</div>
            </div>

            <div className="nurse-arm waving-arm">
              <div className="nurse-hand">👋</div>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="rica-window">
          <div className="rica-header">
            <div className="rica-header-info">
              <div className="rica-mini-avatar">
                👩‍⚕️
              </div>

              <div>
                <strong>RICA</strong>
                <span>Recuenco Hospital Assistant</span>
              </div>
            </div>

            <button
              className="rica-close"
              onClick={closeRica}
              aria-label="Close RICA"
            >
              ×
            </button>
          </div>

          <div className="rica-body">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`rica-message ${message.sender}`}
              >
                {message.sender === "bot" && (
                  <div className="rica-message-avatar">
                    👩‍⚕️
                  </div>
                )}

                <div className="rica-message-text">
                  {message.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="rica-message bot">
                <div className="rica-message-avatar">
                  👩‍⚕️
                </div>

                <div className="rica-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            {messages.length === 0 &&
              !language && (
                <div className="rica-language-card">
                  <div className="rica-small-nurse">
                    👩‍⚕️
                  </div>

                  <h3>Hello! I'm RICA 👋</h3>

                  <p>
                    Please choose your preferred
                    language.
                  </p>

                  <div className="rica-language-buttons">
                    <button
                      onClick={() =>
                        handleLanguageSelect("en")
                      }
                    >
                      English
                    </button>

                    <button
                      onClick={() =>
                        handleLanguageSelect("tl")
                      }
                    >
                      Tagalog
                    </button>
                  </div>
                </div>
              )}

            <div ref={chatEndRef}></div>
          </div>

          {language && !showLanguageOptions && (
            <>
              <div className="rica-quick-actions">
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() =>
                      handleQuickAction(action.id)
                    }
                  >
                    {language === "en"
                      ? action.en
                      : action.tl}
                  </button>
                ))}
              </div>

              <div className="rica-input-area">
                <input
                  type="text"
                  value={input}
                  onChange={(e) =>
                    setInput(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  placeholder={
                    language === "en"
                      ? "Ask RICA anything..."
                      : "Magtanong kay RICA..."
                  }
                />

                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                >
                  ➤
                </button>
              </div>
            </>
          )}

          {showLanguageOptions && language && (
            <div className="rica-language-change">
              <button
                onClick={() =>
                  handleLanguageSelect("en")
                }
              >
                English
              </button>

              <button
                onClick={() =>
                  handleLanguageSelect("tl")
                }
              >
                Tagalog
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RICA;