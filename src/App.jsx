import React, { useEffect } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/NavBar/Hero/Hero'
import Programs from './Components/NavBar/Programs/Programs'
import Title from './Components/Title/Title'
import Services from './Components/Services/Services'
import hospitalLogo from "../public/logo.png";
import Footer from './Components/Footer/Footer'
import ChatBot from './Components/ChatBot/ChatBot'

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
      <NavBar/>
      <Hero onScroll={scrollToAbout}/>
      <div className="container"></div>
        <Title title='OUR SERVICES'/>
        <Programs/>
        <Services/>
        <ChatBot/>
        <Footer/>
    </div>
  )
}

export default App