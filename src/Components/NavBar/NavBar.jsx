import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/Logo.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/">
      <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">News and Updates</Link></li>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/hmo">HMO</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li>
          <Link to="/contact">
            <button className="Btn">Contact Us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;