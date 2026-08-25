import React, { useEffect } from 'react';
import Hero from './Components/NavBar/Hero/Hero';
import Programs from './Components/NavBar/Programs/Programs';
import Title from './Components/Title/Title';
import hospitalLogo from "../src/assets/Nav_Logo/Logo.png";
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
        const target = document.getElementById("our-services");

        if (!target) return;

        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let startTime = null;

        const animation = (currentTime) => {
          if (startTime === null) startTime = currentTime;

          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const ease =
            progress < 0.5
              ? 2 * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;

          window.scrollTo(0, startPosition + distance * ease);

          if (progress < 1) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      };

  return (
    <div>
      <AdvisoryPopup />

      <Hero onScroll={scrollToAbout}/>
      <div className="container">
        <div id="our-services">
          <Title title='OUR SERVICES'/>
        </div>

        <Programs/>
        <Events/>
        <Accreditations/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;