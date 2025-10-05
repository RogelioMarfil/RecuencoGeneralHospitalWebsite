import React, { useEffect } from 'react'
import Hero from './Components/NavBar/Hero/Hero'
import Programs from './Components/NavBar/Programs/Programs'
import Title from './Components/Title/Title'
import Services from './Components/Services/Services'
import hospitalLogo from "../src/assets/Logo.png";
import Footer from './Components/Footer/Footer'
import ChatBot from './Components/ChatBot/ChatBot'
import Complaints from './Components/Complains/Complain'

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
<<<<<<< HEAD
=======
      <NavBar/>
>>>>>>> 7d14e1cfb3f95782b4b1e6dcfe9c52c448964623
       <Hero onScroll={scrollToAbout}/>
      <div className="container">
        <Title title='OUR SERVICES'/>
        <Programs/>
        <Services/>
        <ChatBot/>
         <Complaints/>
        <Footer/>
        </div>
    </div>
  )
}

export default App