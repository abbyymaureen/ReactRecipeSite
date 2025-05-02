import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="custom-navbar">
      <div className="navbar-brand">MySite</div>
      <button className="navbar-toggler" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
