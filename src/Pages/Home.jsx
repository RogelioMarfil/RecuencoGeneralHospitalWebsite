import React from "react";
import Hero from "../Components/NavBar/Hero/Hero";
import Programs from "../Components/NavBar/Programs/Programs";
import Title from "../Components/Title/Title";
import Services from "../Components/Services/Services";
import ChatBot from "../Components/ChatBot/ChatBot";
import Complaints from "../Components/Complains/Complain";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="container"></div>
      <Title title="OUR SERVICES" />
      <Programs />
      <Services />
      <ChatBot />
      <Complaints />
      <Footer />
    </>
  );
};

export default HomePage;