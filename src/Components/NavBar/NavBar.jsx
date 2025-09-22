import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/Logo.png'

const NavBar = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");   
      } else {
        setScrollDirection("up");    
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${scrollDirection === "down" ? "dark-nav" : "transparent"}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>HMO</li>
        <li>Doctors</li>
        <li>Services</li>
        <li>About Us</li>
        <li><button className="Btn">Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default NavBar