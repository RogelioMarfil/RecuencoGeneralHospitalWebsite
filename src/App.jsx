import React, { useEffect } from 'react';
import Hero from './Components/NavBar/Hero/Hero';
import Programs from './Components/NavBar/Programs/Programs';
import Title from './Components/Title/Title';
import hospitalLogo from "../src/assets/Logo.png";
import Footer from './Components/Footer/Footer';
import Events from './Components/Events/Events';
import Accreditations from './Components/Accredetation/Accreditations';
import AdvisoryPopup from './Components/Advisory/AdminAdvisoryManager';

function App () {
  useEffect(() => {
    document.title = "Recuenco General Hospital";
    const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = hospitalLogo;
    document.head.appendChild(favicon);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <AdvisoryPopup />

      <Hero onScroll={scrollToAbout}/>
      <div className="container">
        <Title title='OUR SERVICES'/>
        <Programs/>
        <Events/>
        <Accreditations/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;