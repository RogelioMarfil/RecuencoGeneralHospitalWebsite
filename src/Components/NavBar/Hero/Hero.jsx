import React from 'react'
import './Hero.css'

const Hero = ({ onScroll }) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Recuenco General Hospital</h1>
        <p>
          Our hospital is committed to providing you 
          with the best care possible by offering efficient,
          adequate, cost-effective, and high-quality 
          healthcare services. We go above and 
          beyond treatment to give you and your 
          family with the support, confidence, and recovery 
          you deserve 
        </p>
        <p>"Sa Recuenco, Alaga ka!"</p>
        <button className="Btn" onClick={onScroll}>
          Explore More <img src="" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Hero