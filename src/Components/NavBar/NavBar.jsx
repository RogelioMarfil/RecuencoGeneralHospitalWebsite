import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/Logo.png'

const NavBar = () => {
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);  
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
     <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>HMO</li>
        <li>Doctors</li>
        <li>Careers</li>
        <li>About Us</li>
        <li><button className="Btn">Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default NavBar